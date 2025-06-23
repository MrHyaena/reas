import Router from "koa-router";

export const rootRouter = new Router({ prefix: "/" });

rootRouter.get("/", (ctx) => {
  ctx.body = "Homepage";
});
