import { Options } from './options.ts'

function main() {
  const options = new Options(Deno.args)
  console.log(options)
}

if (import.meta.main) {
  try {
    main()
  } catch (error) {
    console.log(error)
  }
}