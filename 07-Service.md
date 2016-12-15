# Service

サービスを作成します

```bash
$ ng g class issue/issue.store
```

`issue.store.ts`は配列の登録を記述します。

具体的には
```
import {Injectable} from '@angular/core';

import {Issue} from './issue';

@Injectable()
export class IssueStore {
  private issues: Issue[] = [];
  
  public delete(index: number): void {
    this.issues.splice(index, 1);
  }
  
  public add(issue: Issue): void {
    this.issues.push(issue);
  }
  
  public get list(): Issue[] {
    return this.issues;
  }
}
```
issue.component.tsは

```
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Issue } from './issue';
import { IssueStore } from './issue.store';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  private issue: Issue;
  private issues: Issue[];

  constructor (
    private issueStore: IssueStore
  ) {}

  ngOnInit(): void {
    this.issue = new Issue;
    this.issues = this.issueStore.list;
  }

  public onSubmit(form: NgForm): void {
    const issue = {
      title: form.value.title,
      desc: form.value.desc
    }

    this.issueStore.add(issue);

    form.reset();
  }

  public onDelete(index: number): void {
    this.issueStore.delete(index);
  }

}
```

app.module.tsにIssueStoreを追加します

```
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
import { MarkdownPipe } from './markdown.pipe';

import { IssueStore } from './issue/issue.store';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IssueComponent,
    PageNotFoundComponent,
    WikiComponent,
    MarkdownPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    IssueStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
