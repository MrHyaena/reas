import Router from "koa-router";
import { leadRouter } from "./routes/leadRoute.js";
import { rootRouter } from "./routes/rootRoute.js";
export const allRouter = new Router();
//Router for working with leads
allRouter.use("/lead", leadRouter.routes()).use(leadRouter.allowedMethods());
//Route for server root
allRouter.use("/", rootRouter.routes()).use(rootRouter.allowedMethods());
