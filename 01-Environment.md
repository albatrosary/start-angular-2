# 01 Environment

## Mac

### nodebrewのインストール

nodebrewをインストールします。既にnodeがインストールされている場合には「奇麗に」削除しておきます。簡単には「奇麗に」削除できませんのでgoogleで色々と検索してください。

```bash
$ curl -L git.io/nodebrew | perl - setup
...
========================================
Add path:

export PATH=$HOME/.nodebrew/current/bin:$PATH
========================================
```

インストール完了したらpathを設定します。vi等で「~/.bash_profile」ファイルを開きAdd pathで指定されたパスを登録してください。登録後保存し環境を適用させます：

```bash
$ source ~/.bash_profile
```

nodeバージョンを調べます。一覧でバージョンが表示されます。

```bash
$ nodebrew ls-remote
```

利用したいバージョンのnodeをインストールします。

```bash
$ nodebrew install-binary v6.7.0
```

使うnodeバージョンを指定します。

```bash
$ nodebrew use v6.7.0
```

これでnodeの準備が完了しました。

Macの場合はこれ以外にXcodeやRuby、Pythonなどインストールされていることが望ましいですが、あまり難しくはないので各自インストールし確認してください。


## Windows 10

必要な開発環境をインストールします。

* git bash
* python2.7
* Ruby
* Visual Studio 2015 Community
* Windows 10 SDK
* nodist
* nodejs
* yo grunt-cli bower gulp live-server
* Visual Studio Code

### git bashのインストール

何はともあれWindowsマシンを利用するときに、必ず`git bash`はインストールします。

exeをダウンロードしてインストールしますが設定が少しあります。重要なのが「Configuring the line ending conversions」で`Checkout as-is, commit Unix-style line endings`を選択してます。
参考までに、こちらでも同じexeが落ちてきます。

[http://git-scm.com/]

### python2.7

python2.7をインストールします。npmライブラリの一部でpythonを利用していますので必須です（3系使わず2系）。

[https://www.python.org/downloads/]

インストール出来たらPATHを追加しておきます。インストーラーなんだからやってくださいよと思うのだが自力で書き込みます。

### Ruby

Sassコンパイルとかで利用されるRuby（安定版）も入れます。三種類インストーラーありますが`RubyInstaller`を使ってます。

[http://rubyinstaller.org/]

こちらはパスの設定はインストーラーからできる

### Visual Studio 2015 Community

[https://www.microsoft.com/ja-jp/dev/products/community.aspx:title]

オプションのインストールに関してはnode-gypがエラーになりますので対策はこちらを見て下さい

[https://github.com/nodejs/node-gyp]

node-gypの条件はWindows10の場合は下記で「Visual C++ チェック忘れるな」ということのようです。

* Install the latest version of npm (3.3.6 at the time of writing)
* Install Python 2.7
* Install Visual Studio Community 2015 Edition. (Custom Install, Select Visual C++ during the installation)
* Set the environment variable GYP_MSVS_VERSION=2015
* Run the command prompt as Administrator
* $ npm install (--msvs_version=2015) <-- Shouldn't be needed if you have set GYP_MSVS_VERSION env

### WIdows 10 SDK

[https://dev.windows.com/ja-jp/downloads/windows-10-sdk:title]

### nodist

MACでnodejs入れるときにnodebrewで入れたように、Windowsではnodistをインストールします。

インストーラーが用意されているのでダウンロードし実行する

1. Download the installer here(<-githubを確認)
2. Run the installer and follow the install wizard

設定は`set NODIST_X64=0`を`git bash`上で実行し利用するnodeを登録する。確認のため`nodist -v`を叩くとバージョンが表示されます。現在は

```bash
$ nodist -v
0.7.2
```

と表示されます。

```bash
$ nodist + v6.7.0
$ nodist 6.7.0
```

これで利用可能になります。確認のためバージョンを見てみると

```bash
$ node -v
v6.7.0
$ npm -v
3.10.3
```

となります。

## Windows 7

注) コマンドを実行する際はWindows PowerShellで行うこと（管理者として実行）

### Git のインストール

* Gitのダウンロード

```
https://git-for-windows.github.io/
```

* Setup時に以下を選択してインストールする

```
・ Run Git from the Windows Command Prompt
・ Checkout as-is, commit as-is
・ Use Windows’s default console windows
```

### nodistのインストール

* パッケージ管理、パージョン管理ツールのインストール

```
iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

* nodistのインストール

```
cinst nodist -y
```

* PowerShellを開き直し、nodeのインストール、npmのバージョンアップする

```
nodist -v
nodist 6.7.0
nodist npm 3.10.8
```

* 設定確認

```
nodist
> 6.7.0 (global: 6.7.0)
nodist npm
> 3.10.8  (global: 3.10.8)
```

### .NET Framework 4.5.1 のインストール※入っていれば実施不要

* .NET Frameworkをインストール

```
http://www.microsoft.com/en-us/download/details.aspx?id=40773
```

### Rubyのインストール（2系）

* 2系のRubyのインストール

```
http://rubyinstaller.org/
```

### Build Toolsのインストール

コマンドを実行し、エラーなく終了すればOK

```
npm install --global --production windows-build-tools
```

### windows10 SDKのインストール

* Visual C++ Build ToolsのEXEファイルのダウンロード
* EXEファイルの実行
* windows10 SDKにチェックを追加しインストール

```
http://go.microsoft.com/fwlink/?LinkId=691126
```

### 環境変数にpythonの設定

windowsの環境変数にBuild Toolsでインストールされたpythonのパスを設定

```
C:\Users\ユーザ名\.windows-build-tools\python27
```
注) 必要に応じてPATHを変更

### npmのオプションの設定

npmのオプションを設定する

```
npm config set python python.exeのPATH
npm config set msvs_version 2015
```

## angular-cliのインストール

angular-cliのインストールする。   

ng --helpが実行できればインストール完了

```
$ npm install -g angular-cli
$ ng --help
```

## angular-cliを使ったプロジェクトの生成

プロジェクトの生成

```
$ ng new Handson
$ cd Handson
$ ng serve
```

ブラウザで下記URLが表示されることを確認

```
http://localhost:4200/
```

## 外部ファイルの登録

デモ作成用に幾つかファイルを追加します。詳細についてはハンズオンを進めながら行います。

```
npm install express body-parser cookie-parser --save-dev
npm install @types/express @types/body-parser @types/cookie-parser --save-dev
npm install angular2-express-engine angular2-platform-node angular2-universal angular2-universal-polyfills --save-dev

npm install marked --save
npm install @types/marked --save-dev
```
