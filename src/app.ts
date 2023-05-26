import express, { Application, Request, Response } from "express";
import APIRouter from "./routes";

const app: Application = express();

app.use(express.json());

app.use("/api/v1", APIRouter);
app.get("/", (req: Request, res: Response) => {
  res.send("Hola chamacos!");
});

export default app;
