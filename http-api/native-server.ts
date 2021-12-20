import { routing } from './router.ts'

const port = 8080
console.log(`HTTP webserver running. Access it at: http://localhost:${port}`)

const notFound = new Response(
  JSON.stringify({
    "message" : "Not Found",
  }),
  {
    status: 404,
  }
)

async function handleConn(conn: Deno.Conn) {
  const httpConn = Deno.serveHttp(conn);
  for await (const e of httpConn) {
    const request = e.request
    const fun = routing(request.url)
    if (fun) {
      e.respondWith(fun(request))
    } else {
      e.respondWith(notFound)
    }
  }
}

for await (const conn of Deno.listen({ port: port })) {
  handleConn(conn)
}