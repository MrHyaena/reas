import Router from "koa-router";
import { leadRouter } from "./routes/leadRoute.js";
import { rootRouter } from "./routes/rootRoute.js";
export const allRouter = new Router();
allRouter.use(leadRouter.routes()).use(leadRouter.allowedMethods());
allRouter.use(rootRouter.routes()).use(rootRouter.allowedMethods());
