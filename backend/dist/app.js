import Koa from "koa";
import json from "koa-json";
import bodyParser from "koa-bodyparser";
import { allRouter } from "./router.js";
const app = new Koa();
//Json prettier Middleware
app.use(json());
app.use(bodyParser());
//Router Middleware
app.use(allRouter.routes()).use(allRouter.allowedMethods());
export default app;
