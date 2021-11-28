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
  // ルート定義の中からリクエストパスに一致する path を持っている要素の関数を返却（最初に一致した1件）
  return routes.find(route => route.path === path)?.fun
}