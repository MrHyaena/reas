import Router from "koa-router";

//Initializing route
export const rootRouter = new Router();

rootRouter.get("/", (ctx) => {
  ctx.body = "Homepage";
});
