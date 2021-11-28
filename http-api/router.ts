import { greet } from './api.ts'

/** Request を受け取って Response を返却する関数の型 */
export type EntryFunction = (request: Request) => Response

type Route = {
  readonly path: string
  readonly fun: EntryFunction
}

const routes:Route[] = [
  {
    path: "/",
    fun: () => new Response("hello")
  },
  {
    path: "/greet",
    fun: greet
  },
]

export function routing(requestUrl: string): EntryFunction | undefined {
  const url = new URL(requestUrl)
  const path = url.pathname
  return routes.find(route => route.path === path)?.fun
}