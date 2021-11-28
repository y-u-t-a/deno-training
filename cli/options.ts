import { parse } from 'https://deno.land/std@0.116.0/flags/mod.ts'

/**
 * mysql コマンドのオプションを模した型
 * https://dev.mysql.com/doc/refman/5.6/ja/mysql-command-options.html
 */
type ValidOptions = {
  readonly user?: string
  readonly u?: string
  readonly host?: string
  readonly h?: string
  readonly database?: string
  readonly D?: string
}

const defaultOption: Required<ValidOptions> = {
  user: "root",
  u: "root",
  host: "localhost",
  h: "localhost",
  database: "",
  D: "",
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
