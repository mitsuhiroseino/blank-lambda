# blank-lambda

TypeScriptでLambdaの開発を行う時のサンプル。  
Lambdaで公開するソースコードに加え、開発中に利用するツール類やテストコードもTypeScriptで記述可能。

## サンプル作成の目的

- 可能な限りTypeScriptでソースコードを記述できるようにしたい
- JavaScriptでソースコードを記述した際と変わらない手順で実行できるようにしたい
- TypeScriptからJavaScriptに変換をする処理はできる限りesbuildを使用したい

## 主なライブラリ・ツール

- yarn: v4を使用しnpmは利用不可
- esbuild: TypeScriptからJavaScriptへのトランスパイルで使用
- tsx: TypeScriptを直接node.jsで実行する際に使用
- jest: テストコードの実行で使用
- esbuild-jest: jestで実行するTypeScriptおよびES Moduleのトランスパイルに使用
- prettier: ソースコードのフォーマットで使用

## プロジェクトの構成

- blank-lambda
  - build: ビルドされたソースコード (`yarn build`実行時に作成)
  - scripts: 開発中に使用するツール類 (TypeScript)
  - src: ビルド前のソースコード
    - index.ts: 公開されるソースコードのエントリーポイント (TypeScript)
    - index.test.ts: テストコード (TypeScript)
  - temp: ビルドされたソースコードを圧縮したzipファイル (`yarn product`実行時に作成)
  - .gitignore: Gitに公開しないファイルの設定
  - .npmrc: npmの設定
  - .prettierrc.js: ソースコードのフォーマットの設定
  - .prettierrc.optimize.js: ソースコードの不要なimportを削除する際のフォーマットの設定
  - .yarnrc.yml: yarnの設定
  - esbuild.config.ts: ビルド時用のesbuildの設定
  - jest.config.js: jestの設定
  - LISENSE: ライセンスファイル
  - package.json: パッケージJSON
  - README.md: 当ファイル
  - tsconfig.json: TypeScriptの設定
  - yarn.lock: yarnでインストールしたパッケージの情報
  
## scripts

package.jsonに記載されているscriptsは下記の通り

- build: `./src`配下のTypeScriptのソースコードを、Node.js v20向けのJavaScriptにトランスパイルし、`./build`配下に出力する
- product: 上記の`build`を行った後、JavaScriptのファイルをzipで圧縮し、`./temp`配下に出力する
- format: `./src`配下のソースコードを一括フォーマットする
- optimize: `./src`配下のソースコードを一括フォーマットしつつ、不要なimportを削除する
- test: テストコードを実行する
