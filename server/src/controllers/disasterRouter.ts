import { Request, Response, Router } from "express";
import earthquakeData from "../data/earthquake.json";
import { createDisasters, deleteDisaster, getDisasterByType, getDisasters, updateDisaster } from "../handlers/disaster";

const disasterRouter = Router();

disasterRouter.get("/disaster", getDisasters);
disasterRouter.get("/disaster/type", getDisasterByType);
disasterRouter.post("/disaster", createDisasters)
disasterRouter.put("/disaster/:id", updateDisaster)
disasterRouter.delete("/disaster/:id", deleteDisaster)

export default disasterRouter;
