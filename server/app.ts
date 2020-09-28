import express, { Request, Response, NextFunction } from "express";

const app: express.Application = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("express server!!!!!!");
});

export default app;
