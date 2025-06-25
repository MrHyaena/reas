import Router from "koa-router";
import { leadReceive } from "../controllers/leadController.js";
//Initializing route
export const leadRouter = new Router();
//Route for receiving lead
leadRouter.post("/", leadReceive);
