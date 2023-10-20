import express from "express";
import earthquakeRouter from "./src/controllers/earthquake";

const app = express();
const port = 6969;

app.use("/earthquake", earthquakeRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
