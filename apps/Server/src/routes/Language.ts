import { Router } from "express";
import { getTranslation } from "../controller/language";

const Language_Router = Router();

// Language_Router.get("/", getTest);
Language_Router.get("/:lang/:pageId", getTranslation);

export { Language_Router };
