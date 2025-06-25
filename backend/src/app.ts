import Koa from "koa";
import json from "koa-json";
import bodyParser from "koa-bodyparser";
import { allRouter } from "./router.js";
import cors from "@koa/cors";

export const app = new Koa();

//Json prettier Middleware
app.use(json());

//Body parser for better readability on client
app.use(bodyParser());

//Cors rules
app.use(cors());

//AllRouter that unites all routers into this one
app.use(allRouter.routes()).use(allRouter.allowedMethods());
