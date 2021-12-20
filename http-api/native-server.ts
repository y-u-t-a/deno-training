import { routing } from './router.ts'

const port = 8080
console.log(`HTTP webserver running. Access it at: http://localhost:${port}/`)

const notFound = new Response(
  JSON.stringify({
    "message" : "Not Found",
  }),
  {
    status: 404,
  }
)

for await (const conn of Deno.listen({ port: port })) {
  (async () => {
    for await (const { respondWith, request } of Deno.serveHttp(conn)) {
      const fun = routing(request.url)
      if (fun) {
        respondWith(fun(request))
      } else {
        respondWith(notFound)
      }
    }
  })()
}