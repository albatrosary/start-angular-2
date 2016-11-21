# 02 プロジェクトの生成及び設定

## プロジェクトの生成

Angular CLIを使ってプロジェクトを生成します。コマンドプロンプトを表示し自身の作業ディレクトリへ移動した後、プロジェクトを生成します。
サンプルではホームディレクトリに`Sandbox`があり、そこでAngular CLIコマンドを発行しています。

```bash
$ cd ~
$ cd Sandbox
$ ng new [Project_Name]
installing ng2
  create .editorconfig
  create README.md
  
 ・・・
 
Successfully initialized git.
Installing packages for tooling via npm.
Installed packages for tooling via npm.
$
```

プロジェクトの生成には数分時間を要します。
これは必要なファイルをnpmでダウンロードしているためです。
特にe2e(End to Endテスト)で利用するファイルをダウンロードしビルドするために時間を要します。

プロジェクトの生成が終了したら、プロジェクトディレクトリに移動し簡易サーバを起動します。

```bash
$ cd [Project_Name]
$ ng serve
** NG Live Development Server is running on http://localhost:4200. **
 ・・・
           Asset       Size  Chunks             Chunk Names
  main.bundle.js    2.71 MB    0, 2  [emitted]  main
styles.bundle.js    10.2 kB    1, 2  [emitted]  styles
       inline.js    5.53 kB       2  [emitted]  inline
        main.map    2.81 MB    0, 2  [emitted]  main
      styles.map    14.1 kB    1, 2  [emitted]  styles
      inline.map    5.59 kB       2  [emitted]  inline
      index.html  478 bytes          [emitted]  
Child html-webpack-plugin for "index.html":
         Asset     Size  Chunks       Chunk Names
    index.html  2.81 kB       0       
webpack: bundle is now VALID.
```

ブラウザを`http://localhost:4200/`で起動するようメッセージが表示されます。実際にブラウザを立ち上げアクセスしてみます。簡単なメッセージが表示されると思います。
`ng serve`で起動した簡易サーバはライブリロードの機能が含まれているためTypeScriptファイルやHTMLファイルなどを更新した場合に自動的にブラウザが更新されます。

例えば`src/app`ディレクトリにある`app.component.ts`を更新してみます。

```typescript
export class AppComponent {
  title = 'app works!';
}
```

を次のように変更してみます

```typescript
export class AppComponent {
  title = 'app sample!';
}
```

TypeScriptがコンパイルされブラウザに変更した文字が表示されます。

アプリケーション開発では通常、ブラウザを起動したままTypeScriptファイルやHTMLファイル、CSSファイル(SASSファイル)を更新しながら進めていきます。

## ユニットテスト

次に実際にはプロジェクトが完了したらユニットテストを実行します。
ユニットテストのコマンドは`ng test`で実行できます。

[ctrl]+[c]で`ng serve`コマンドを停止させ`ng test`コマンドを実行します。今`ng test`を実行すると次のようなエラー発行されます。

```bash
$ ng test
21 11 2016 22:07:56.353:WARN [karma]: No captured browser, open http://localhost:9876/
21 11 2016 22:07:56.365:INFO [karma]: Karma v1.2.0 server started at http://localhost:9876/
21 11 2016 22:07:56.366:INFO [launcher]: Launching browser Chrome with unlimited concurrency
21 11 2016 22:07:56.372:INFO [launcher]: Starting browser Chrome
21 11 2016 22:07:57.895:INFO [Chrome 54.0.2840 (Mac OS X 10.12.1)]: Connected on socket /#5nJLeGud-ZeWheNSAAAA with id 9431361
Chrome 54.0.2840 (Mac OS X 10.12.1): Executed 3 of 3 SUCCESS (0.339 secs / 0.328 secs)
^Csagawa-mbp:project_name albatrosary$ ng test
21 11 2016 22:09:38.702:WARN [karma]: No captured browser, open http://localhost:9876/
21 11 2016 22:09:38.714:INFO [karma]: Karma v1.2.0 server started at http://localhost:9876/
21 11 2016 22:09:38.714:INFO [launcher]: Launching browser Chrome with unlimited concurrency
21 11 2016 22:09:38.719:INFO [launcher]: Starting browser Chrome
21 11 2016 22:09:39.919:INFO [Chrome 54.0.2840 (Mac OS X 10.12.1)]: Connected on socket /#UiWi_zzkjAja3k0tAAAA with id 77376120
Chrome 54.0.2840 (Mac OS X 10.12.1) App: ProjectName should have as title 'app works!' FAILED
	Expected 'app sample!' to equal 'app works!'.
	    at webpack:///Users/albatrosary/Sandbox/project_name/src/app/app.component.spec.ts:24:22 <- src/test.ts:16907:27
	    at ZoneDelegate.invoke (webpack:///Users/albatrosary/Sandbox/project_name/~/zone.js/dist/zone.js:232:0 <- src/test.ts:20417:26)
	    at AsyncTestZoneSpec.onInvoke (webpack:///Users/albatrosary/Sandbox/project_name/~/zone.js/dist/async-test.js:49:0 <- src/test.ts:13054:39)
	    at ProxyZoneSpec.onInvoke (webpack:///Users/albatrosary/Sandbox/project_name/~/zone.js/dist/proxy.js:76:0 <- src/test.ts:13746:39)
Chrome 54.0.2840 (Mac OS X 10.12.1) App: ProjectName should render title in a h1 tag FAILED
	Expected '
	  app sample!
	' to contain 'app works!'.
	    at webpack:///Users/albatrosary/Sandbox/project_name/src/app/app.component.spec.ts:31:53 <- src/test.ts:16913:58
	    at ZoneDelegate.invoke (webpack:///Users/albatrosary/Sandbox/project_name/~/zone.js/dist/zone.js:232:0 <- src/test.ts:20417:26)
	    at AsyncTestZoneSpec.onInvoke (webpack:///Users/albatrosary/Sandbox/project_name/~/zone.js/dist/async-test.js:49:0 <- src/test.ts:13054:39)
	    at ProxyZoneSpec.onInvoke (webpack:///Users/albatrosary/Sandbox/project_name/~/zone.js/dist/proxy.js:76:0 <- src/test.ts:13746:39)
Chrome 54.0.2840 (Mac OS X 10.12.1): Executed 3 of 3 (2 FAILED) (0.273 secs / 0.239 secs)
```

先程`app.component.ts`を

```
export class AppComponent {
  title = 'app sample!';
}
```

と変更したためにテストが通らなくなっています。テストコードを変更します。`app.component.spec.ts`を見て下さい。

```typescript
 ・・・
  it(`should have as title 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
 ・・・
```

ここに`app works!`という文字列と比較している部分あありますので、これを`app sample!`に変更してください。

やはりライブリロードが実行されテストが実行されます。結果次のようなメッセージあ表示されます。

```bash
Chrome 54.0.2840 (Mac OS X 10.12.1): Executed 3 of 3 SUCCESS (0.191 secs / 0.187 secs)
```

## e2eテスト

e2eテストは「End to Endテスト」と呼ばれブラウザを通してキーコード入力しクリックなどの動作テストをするためのものです。
先程と同様にコンソール画面を[ctrl]+[c]でプロセスを停止させe2eを実行します。

e2eテストを行うには、別のコンソールで簡易サーバを立ち上げておきe2eコマンドを実行する必要あります。

```bash
$ ng serve
 ・・・
Time: 10242ms
           Asset       Size  Chunks             Chunk Names
  main.bundle.js    2.71 MB    0, 2  [emitted]  main
styles.bundle.js    10.2 kB    1, 2  [emitted]  styles
       inline.js    5.53 kB       2  [emitted]  inline
        main.map    2.81 MB    0, 2  [emitted]  main
      styles.map    14.1 kB    1, 2  [emitted]  styles
      inline.map    5.59 kB       2  [emitted]  inline
      index.html  478 bytes          [emitted]  
Child html-webpack-plugin for "index.html":
         Asset     Size  Chunks       Chunk Names
    index.html  2.81 kB       0       
webpack: bundle is now VALID.
```

簡易サーバが起動した後、e2eテストを実行します。

```
$ ng e2e

> project-name@0.0.0 pree2e /Users/albatrosary/Sandbox/project_name
> webdriver-manager update

[22:21:03] I/update - chromedriver: file exists /Users/albatrosary/Sandbox/project_name/node_modules/webdriver-manager/selenium/chromedriver_2.24mac64.zip
[22:21:03] I/update - chromedriver: unzipping chromedriver_2.24mac64.zip
[22:21:04] I/update - chromedriver: setting permissions to 0755 for /Users/albatrosary/Sandbox/project_name/node_modules/webdriver-manager/selenium/chromedriver_2.24
[22:21:04] I/update - chromedriver: v2.24 up to date
[22:21:04] I/update - selenium standalone: file exists /Users/albatrosary/Sandbox/project_name/node_modules/webdriver-manager/selenium/selenium-server-standalone-2.53.1.jar
[22:21:04] I/update - selenium standalone: v2.53.1 up to date
[22:21:05] W/file_manager - geckodriver-v0.9.0-mac.tar.gz expected length undefined, found 1096885
[22:21:05] W/file_manager - removing file: /Users/albatrosary/Sandbox/project_name/node_modules/webdriver-manager/selenium/geckodriver-v0.9.0-mac.tar.gz
[22:21:05] I/downloader - geckodriver: downloading version v0.9.0
[22:21:05] I/downloader - curl -o /Users/albatrosary/Sandbox/project_name/node_modules/webdriver-manager/selenium/geckodriver-v0.9.0-mac.tar.gz https://github.com/mozilla/geckodriver/releases/download/v0.9.0/geckodriver-v0.9.0-mac.tar.gz
[22:21:09] I/update - geckodriver: unzipping /Users/albatrosary/Sandbox/project_name/node_modules/webdriver-manager/selenium/geckodriver-v0.9.0-mac.tar.gz
[22:21:09] I/update - geckodriver: setting permissions to 0755 for /Users/albatrosary/Sandbox/project_name/node_modules/webdriver-manager/selenium/geckodriver-v0.9.0

> project-name@0.0.0 e2e /Users/albatrosary/Sandbox/project_name
> protractor "./protractor.conf.js"

[22:21:10] I/direct - Using ChromeDriver directly...
[22:21:10] I/launcher - Running 1 instances of WebDriver
Started
Spec started
F
  project-name App
    ✗ should display message saying app works
      - Expected 'app sample!' to equal 'app works!'.



Failures:
1) project-name App should display message saying app works
  Message:
    Expected 'app sample!' to equal 'app works!'.
  Stack:
    Error: Failed expectation
        at Object.<anonymous> (/Users/albatrosary/Sandbox/project_name/e2e/app.e2e-spec.ts:10:41)
        at /Users/albatrosary/Sandbox/project_name/node_modules/protractor/node_modules/jasminewd2/index.js:94:23
        at new ManagedPromise (/Users/albatrosary/Sandbox/project_name/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:1082:7)
        at controlFlowExecute (/Users/albatrosary/Sandbox/project_name/node_modules/protractor/node_modules/jasminewd2/index.js:80:18)
        at TaskQueue.execute_ (/Users/albatrosary/Sandbox/project_name/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2913:14)
        at TaskQueue.executeNext_ (/Users/albatrosary/Sandbox/project_name/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2896:21)
        at asyncRun (/Users/albatrosary/Sandbox/project_name/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:2820:25)
        at /Users/albatrosary/Sandbox/project_name/node_modules/protractor/node_modules/selenium-webdriver/lib/promise.js:639:7
        at process._tickCallback (internal/process/next_tick.js:103:7)

1 spec, 1 failure
Finished in 0.856 seconds

**************************************************
*                    Failures                    *
**************************************************

1) project-name App should display message saying app works
  - Expected 'app sample!' to equal 'app works!'.

Executed 1 of 1 spec (1 FAILED) in 0.856 sec.
[22:21:12] I/launcher - 0 instance(s) of WebDriver still running
[22:21:12] I/launcher - chrome #01 failed 1 test(s)
[22:21:12] I/launcher - overall: 1 failed spec(s)
[22:21:12] E/launcher - Process exited with error code 1


npm ERR! Darwin 16.1.0
npm ERR! argv "/Users/albatrosary/.nodebrew/node/v6.7.0/bin/node" "/Users/albatrosary/.nodebrew/current/bin/npm" "run" "e2e" "--" "./protractor.conf.js"
npm ERR! node v6.7.0
npm ERR! npm  v3.10.3
npm ERR! code ELIFECYCLE
npm ERR! project-name@0.0.0 e2e: `protractor "./protractor.conf.js"`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the project-name@0.0.0 e2e script 'protractor "./protractor.conf.js"'.
npm ERR! Make sure you have the latest version of node.js and npm installed.
npm ERR! If you do, this is most likely a problem with the project-name package,
npm ERR! not with npm itself.
npm ERR! Tell the author that this fails on your system:
npm ERR!     protractor "./protractor.conf.js"
npm ERR! You can get information on how to open an issue for this project with:
npm ERR!     npm bugs project-name
npm ERR! Or if that isn't available, you can get their info via:
npm ERR!     npm owner ls project-name
npm ERR! There is likely additional logging output above.

npm ERR! Please include the following file with any support request:
npm ERR!     /Users/albatrosary/Sandbox/project_name/npm-debug.log

Some end-to-end tests failed, see above.
$ 
```

ここでもユニットテストと同様の理由でエラーが発生します。e2eテストコードは「src」ディレクトリとは別の「e2e」ディレクトリに格納されています。
その中にある`app.e2e-spec.ts`というファイルを見てみます。

```typescript
  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
```

`app works!`という文字と比較している部分がありますので先程と同様に`app sample!`へ変更し、再度実行してみます。

```typescript
  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app sample!');
  });
```

正常に実行されます。

```bash
$ ng e2e

> project-name@0.0.0 pree2e /Users/albatrosary/Sandbox/project_name
> webdriver-manager update

[22:26:28] I/update - chromedriver: file exists /Users/albatrosary/Sandbox/project_name/node_modules/webdriver-manager/selenium/chromedriver_2.24mac64.zip
[22:26:28] I/update - chromedriver: unzipping chromedriver_2.24mac64.zip
[22:26:28] I/update - chromedriver: setting permissions to 0755 for /Users/albatrosary/Sandbox/project_name/node_modules/webdriver-manager/selenium/chromedriver_2.24
[22:26:28] I/update - chromedriver: v2.24 up to date
[22:26:28] I/update - selenium standalone: file exists /Users/albatrosary/Sandbox/project_name/node_modules/webdriver-manager/selenium/selenium-server-standalone-2.53.1.jar
[22:26:28] I/update - selenium standalone: v2.53.1 up to date
[22:26:29] W/file_manager - geckodriver-v0.9.0-mac.tar.gz expected length undefined, found 1096885
[22:26:29] W/file_manager - removing file: /Users/albatrosary/Sandbox/project_name/node_modules/webdriver-manager/selenium/geckodriver-v0.9.0-mac.tar.gz
[22:26:29] I/downloader - geckodriver: downloading version v0.9.0
[22:26:29] I/downloader - curl -o /Users/albatrosary/Sandbox/project_name/node_modules/webdriver-manager/selenium/geckodriver-v0.9.0-mac.tar.gz https://github.com/mozilla/geckodriver/releases/download/v0.9.0/geckodriver-v0.9.0-mac.tar.gz
[22:26:33] I/update - geckodriver: unzipping /Users/albatrosary/Sandbox/project_name/node_modules/webdriver-manager/selenium/geckodriver-v0.9.0-mac.tar.gz
[22:26:33] I/update - geckodriver: setting permissions to 0755 for /Users/albatrosary/Sandbox/project_name/node_modules/webdriver-manager/selenium/geckodriver-v0.9.0

> project-name@0.0.0 e2e /Users/albatrosary/Sandbox/project_name
> protractor "./protractor.conf.js"

[22:26:34] I/direct - Using ChromeDriver directly...
[22:26:34] I/launcher - Running 1 instances of WebDriver
Started
Spec started
.
  project-name App
    ✓ should display message saying app works




1 spec, 0 failures
Finished in 0.827 seconds

Executed 1 of 1 spec SUCCESS in 0.827 sec.
[22:26:37] I/launcher - 0 instance(s) of WebDriver still running
[22:26:37] I/launcher - chrome #01 passed

All end-to-end tests pass.
$ 
```

## ビルド

テストが完了したらリリースモジュールを作成します。リリースモジュールの作成には2種類あります。

* JiT(Just in Time)
* AoT(Ahead of Time)

AoTとJiTの違いは、タイミングとツーリングの問題です。AoTを使用すると、1組のライブラリを使用してビルド時にコンパイラが1回実行されます。JiTを使用すると、実行時に毎回異なるライブラリのセットを使用して各ユーザが実行します。

通常ビルドは次のように行います

```bash
$ ng build
```

「dist」ディレクトリにファイルが生成されます。

```bash
$ tree
.
├── favicon.ico
├── index.html
├── inline.js
├── inline.map
├── main.bundle.js
├── main.map
├── styles.bundle.js
└── styles.map

0 directories, 8 files
```

AoTビルドの場合は引数を付け加え行います。

```bash
$ ng build --aot true
```

同様の結果になりますが、ファイルサイズはいくらか小さくなっていて最適化されています。

```bash
$ tree
.
├── 0.map
├── favicon.ico
├── index.html
├── inline.js
├── inline.map
├── main.bundle.js
├── main.map
├── styles.bundle.js
└── styles.map

0 directories, 9 files
$ 
```

## まとめ

このように通常の開発では`ng serve`でアプリケーション開発を行い、`ng test`や`ng e2e`を使ってテストを行います。テストが完了すると`ng build`でリリースモジュールの作成をします。こうした手順の一部はCIで行うことで開発ライフサイクルの自動化をします。
