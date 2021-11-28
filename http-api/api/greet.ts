import { EntryFunction } from '../interface/index.ts'

export const greet: EntryFunction = (request) => {
  const url = new URL(request.url)
  const name = url.searchParams.get('name') || 'World'
  const responseBody = `Hello, ${name}`
  return new Response(responseBody)
}