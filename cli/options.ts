import { parse } from 'https://deno.land/std@0.116.0/flags/mod.ts'

/**
 * mysql コマンドのオプションを模した型
 * https://dev.mysql.com/doc/refman/5.6/ja/mysql-command-options.html
 */
type ValidOptions = {
  user?: string
  u?: string
  host?: string
  h?: string
  database?: string
  D?: string
}

const defaultOption: Required<ValidOptions> = {
  user: "root" as const,
  u: "root" as const,
  host: "localhost" as const,
  h: "localhost" as const,
  database: "" as const,
  D: "" as const,
}

export class Options {
  readonly host: string
  readonly user: string
  readonly db: string

  constructor(args: string[]) {
    const parsedArgs = parse(args) as ValidOptions
    this.validateUnknownOptions(parsedArgs)

    this.host = parsedArgs.h || parsedArgs.host || defaultOption.host
    this.user = parsedArgs.u || parsedArgs.user || defaultOption.user
    this.db = parsedArgs.D || parsedArgs.database || defaultOption.database
  }

  /**
   * 無効なオプションがあるかチェック
   * 
   * @param parsedArgs
   */
  private validateUnknownOptions(parsedArgs: ValidOptions) {
    const validOptions = Object.keys(defaultOption)
    const allArgs = Object.keys(parsedArgs)
    const unknwonOptions = allArgs.filter(arg => arg !== '_' && !validOptions.includes(arg))
    if (unknwonOptions.length > 0) {
      throw Error(`${unknwonOptions} は無効なオプションです`)
    }
  }
}
