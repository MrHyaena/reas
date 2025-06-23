import Koa from "koa";
import json from "koa-json";
import bodyParser from "koa-bodyparser";
import { allRouter } from "./router.js";
import cors from "@koa/cors";

const app = new Koa();

//Json prettier Middleware
app.use(json());
app.use(bodyParser());
app.use(cors());

//Router Middleware
app.use(allRouter.routes()).use(allRouter.allowedMethods());

export default app;
