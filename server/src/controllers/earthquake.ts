import express, { Request, Response } from "express";
import earthquakeData from "../data/earthquake.json";

const earthquakeRouter = express.Router();

earthquakeRouter.get("/", (req: Request, res: Response) => {
  res.json(earthquakeData);
});

export default earthquakeRouter;
