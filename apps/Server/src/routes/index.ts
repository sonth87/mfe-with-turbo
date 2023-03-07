import { Router } from "express";
import { Language_Router } from "./Language";

const SvRouter = Router();

SvRouter.use("/api/lang", Language_Router);

export { SvRouter };
