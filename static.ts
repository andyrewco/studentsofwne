import { send, Context } from "https://deno.land/x/oak/mod.ts";

export async function content (context:Context) {
  await send(context, context.request.url.pathname, {
    root: `${Deno.cwd()}/static`,
    index: "index.html",
  });
}
