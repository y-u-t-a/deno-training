import { EntryFunction } from './interface/index.ts'
import { greet } from './api.ts'

type Route = {
  path: string
  fun: EntryFunction
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