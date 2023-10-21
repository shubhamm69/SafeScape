import { Request, Response } from "express";
import prisma from "../db";

const getDisasters = async (req: Request, res: Response) => {
  try {
    const disasters = await prisma.disaster.findMany({
      include: {
        emergencyContacts: true,
      },
    });
    res.json({ data: disasters });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal server error" });
  }
};

const createDisasters = async (req: Request, res: Response) => {
  try {
    const disasters = await prisma.disaster.create({
      data: {
        disasterType: req.body.disasterType,
        description: req.body.description,
        causes: req.body.causes,
        safetyTips: req.body.safetyTips,
        emergencyContacts: {
          create: req.body.emergencyContacts.map((contact: any) => ({
            type: contact.type,
            number: contact.number,
          })),
        },
      },
    });
    res.json({ data: disasters });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getDisasterByType = async (req: Request, res: Response) => {
  try {
    const type = req.body.disasterType.toLowerCase();
    const disaster = await prisma.disaster.findFirst({
      where: {
        disasterType: {
          equals: type,
        },
      },
      include: {
        emergencyContacts: true,
      },
    });
    if (!disaster) {
      res.status(404).json({
        message: `Disaster type '${req.body.disasterType}' not found`,
      });
    } else {
      res.json({ data: disaster });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateDisaster = async (req: Request, res: Response) => {
  try {
    const disasterId = req.params.id;

    const existingDisaster = await prisma.disaster.findUnique({
      where: {
        id: disasterId,
      },
      include: {
        emergencyContacts: true,
      },
    });

    if (!existingDisaster) {
      res
        .status(404)
        .json({ message: `Disaster with ID '${disasterId}' not found` });
      return;
    }

    const updatedDisaster = await prisma.disaster.update({
      where: {
        id: disasterId,
      },
      data: {
        disasterType: req.body.disasterType || existingDisaster.disasterType,
        description: req.body.description || existingDisaster.description,
        causes: req.body.causes || existingDisaster.causes,
        safetyTips: req.body.safetyTips || existingDisaster.safetyTips,
      },
    });

    if (req.body.emergencyContacts) {
      await Promise.all(
        req.body.emergencyContacts.map(async (emergencyContact: any) => {
          if (emergencyContact.id) {
            await prisma.emergencyContact.update({
              where: {
                id: emergencyContact.id,
              },
              data: {
                type: emergencyContact.type,
                number: emergencyContact.number,
              },
            });
          } else {
            await prisma.emergencyContact.create({
              data: {
                type: emergencyContact.type,
                number: emergencyContact.number,
                disaster: {
                  connect: {
                    id: disasterId,
                  },
                },
              },
            });
          }
        }),
      );
    }

    res.json({ data: updatedDisaster });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteDisaster = async (req: Request, res: Response) => {
  try {
    const disasterId = req.params.id;

    await prisma.emergencyContact.deleteMany({
      where: {
        disasterId: disasterId,
      },
    });

    await prisma.disaster.delete({
      where: {
        id: disasterId,
      },
    });

    res.json({
      message: "Disaster and associated EmergencyContacts deleted successfully",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal server error" });
  }
};

export {
  getDisasters,
  createDisasters,
  getDisasterByType,
  updateDisaster,
  deleteDisaster,
};
