import { serve } from "https://deno.land/std@0.116.0/http/server.ts"

import { routing } from './router.ts'

function handler(request: Request) {
  const fun = routing(request.url)
  let response
  if (fun) {
    response = fun(request)
  } else {
    response = new Response(
      JSON.stringify({
        "message" : "Not Found",
      }),
      {
        status: 404,
      }
    )
  }
  return response
}

const addr = ":8080"
console.log(`HTTP webserver running. Access it at: http://localhost${addr}/`)

await serve(handler, { addr })