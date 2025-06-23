import Router from "koa-router";
import { leadReceive } from "../controllers/leadController.js";

export const leadRouter = new Router({ prefix: "/lead" });

leadRouter.post("/", leadReceive);
