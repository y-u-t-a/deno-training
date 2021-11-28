# deno-training

## インストール

Deno のインストールはバイナリファイルのダウンロードで行った。  
https://github.com/denoland/deno/releases

## 開発環境

1. VSCode の拡張機能をインストールする  
    https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno
2. 拡張機能の設定で deno.path を設定する
3. Cmd + Shift + P → `Deno:Initialize Workspace Configuration command` を実行する

## コマンド

ファイルの実行

```bash
deno run [オプション] <ファイルパス>
```

※ オプションはサブコマンドの次に書く（末尾に書いても無視される）

パーミッションオプション一覧  
https://deno.land/manual@v1.11.3/getting_started/permissions

## リンク集

- ビルトイン関数
    - https://doc.deno.land/builtin/stable
- 標準ライブラリ
    - https://deno.land/std
- サードパーティライブラリ
    - https://deno.land/x