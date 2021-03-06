import { Application, Router, send } from "https://deno.land/x/oak@v6.5.0/mod.ts"; 
import { oakCors } from "https://deno.land/x/cors/mod.ts";


import { getSignatures, addSignature } from "./router.ts";

// define port
const port = 8080;

// initailize necessary variables
const app = new Application();
const router = new Router({prefix: "/api"});


/*
Middleware
*/

// cors
app.use(
  oakCors(),
);

// logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

// timing
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});


/*
Routes
*/

router
.get("/signatures", getSignatures)
.post("/signatures", addSignature);

// add routes to application
app.use(router.routes());
app.use(router.allowedMethods());


// start server
app.listen({port});
console.log("Server running on http://localhost:8080");
