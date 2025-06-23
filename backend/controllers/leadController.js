export async function leadReceive(ctx) {
  const body = ctx.request.body;
  console.log(body);
  ctx.body = body;
}
