# 03 Routing

SPAの最大の特徴であるルーティングについて学びます。ルーティングはURLに紐付いた画面を表示させる仕組みです。

## ルーティングの設定

はじめにルーティングに必要となる4つの画面を追加します。

```bash
$ ng g component home
$ ng g component issue
$ ng g component page-not-found
$ ng g component wiki
```

これとは別にルーティング設定用のモジュールを作成します。

```bash
$ ng g class app.routes
```

app.routes.tsは

```typescript
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { IssueComponent } from './issue/issue.component';
import { WikiComponent } from './wiki/wiki.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'issue', component: IssueComponent },
  { path: 'wiki', component: WikiComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
```

app.module.tsは`ng g component`コマンドで必要なファイルが追加されています。確認してください。

今回はルーティングの設定がありますのでルーティングをプロバイダー登録します。結果として次のようになります

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IssueComponent } from './issue/issue.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WikiComponent } from './wiki/wiki.component';

import { routing, appRoutingProviders }  from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IssueComponent,
    PageNotFoundComponent,
    WikiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

`app.component`にルーティングの設定を行います。`app.component.html`を開き次のように変更します。

```
<h1>Issue Tracker</h1>
<ul>
  <li><a routerLink="home" routerLinkActive="active">Home</a></li>
  <li><a routerLink="issue" routerLinkActive="active">Issue</a></li>
  <li><a routerLink="wiki" routerLinkActive="active">Wiki</a></li>
</ul>
<router-outlet></router-outlet>
```

これでルーティングを定義することができました。

実際に画面を動かしルーティングが出来ているか確認してください。





