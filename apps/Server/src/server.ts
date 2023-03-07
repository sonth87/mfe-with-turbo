import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { SvRouter } from "./routes";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();

const app: Express = express();
// eslint-disable-next-line turbo/no-undeclared-env-vars
const port = process.env.PORT || 8080;

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(SvRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
