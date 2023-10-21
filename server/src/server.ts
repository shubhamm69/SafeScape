import express, { Request, Response } from "express";
import disasterRouter from "./controllers/disasterRouter";
import morgan from "morgan";
import cors from "cors";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  console.log("Hello from CG-Reimbursment-API");
  res.status(200);
  res.json({ message: "Hello" });
});

app.use("/api", disasterRouter);

export default app;
