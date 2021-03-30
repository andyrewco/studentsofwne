import { RouterContext } from "https://deno.land/x/oak@v6.5.0/mod.ts";

// method for get signatures route 
export function getSignatures(ctx: RouterContext) { 
  // respond with data
  ctx.response.body = {
    signatures: ctx.state.signatures,
    msg: "success"
  }
}

// method for add sigatures route 
export async function addSignature(ctx: RouterContext) { 
  // get result in json
  const result = ctx.request.body({
    type: "json"
  });


  // get value from body
  const value = await result.value;

  // initialize state if it doesn't exist
  if (!ctx.state.signatures) {
    ctx.state = [value.signature];
  } else {
    // update state
    ctx.state.signatures = [...ctx.state.signatures, value.signature];

  }


  // respond with data
  ctx.response.body = {
    signatures: ctx.state.signatures,
    msg: "successfuly added signature"
  }
}

