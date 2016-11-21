# Components

コンポーネントをよりテストが行いやすいように部品化します。

```
$ ng g component issue/issue-detail
$ ng g component issue/issue-input
$ ng g component issue/issue-list
```

### issue.component

はじめに`issue.component`を修正します

issue.component.html
```html
<h2>Issue</h2>
<app-issue-input></app-issue-input>
<app-issue-list></app-issue-list>
```

issue.component.ts
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

  constructor (
  ) {}

  ngOnInit() {
  }
}
```

### issue-detail.component

issue-detail.component.html
```html
<div ngClass="row">{{rownum+1}}</div>
<button (click)="onClick($event)">削除</button>
<p>{{title}}</p>
<pre>{{desc}}</pre>
```

issue-detail.component.ts
```typescript
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit {

  @Input('rownum')
  private rownum: number;

  @Input('title')
  private title: string;

  @Input('desc')
  private desc: string;

  @Output('on-delete')
  private onDelete = new EventEmitter();
  public onClick($event: any): void {
    this.onDelete.emit($event);
  }

  constructor() { }

  ngOnInit() {
  }

}
```

### issue-input

issue-input.component.html

```html
<form #f="ngForm" (ngSubmit)="onSubmit(f)" novalidate>
  <input name="title" ngModel required placeholder="title">
  <textarea name="desc" ngModel required placeholder="desc"></textarea>
  <button type=submit [disabled]="!f.form.valid">登録</button>
</form>
```

issue-input.component.ts
```typescript
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { IssueStore } from '../issue.store'

@Component({
  selector: 'app-issue-input',
  templateUrl: './issue-input.component.html',
  styleUrls: ['./issue-input.component.css']
})
export class IssueInputComponent implements OnInit {

  constructor(
    private issueStore: IssueStore
  ) {
  }

  ngOnInit() {
  }
  
  public onSubmit(form: NgForm): void {

    const issue = {
      title: form.value.title,
      desc: form.value.desc
    }

    this.issueStore.add(issue);

    form.reset();
  }

}
```

### issue-list

issue-list.component.html
```html
<div ngClass="issues" *ngFor="let issue of issues; let i = index">
  <app-issue-detail
    [rownum]="i"
    [title]="issue.title"
    [desc]="issue.desc"
    (on-delete)="onDelete(i)">
  ></app-issue-detail>
</div>
```

issue-list.component.ts

```typescript
import { Component, OnInit } from '@angular/core';

import { Issue } from '../issue';
import { IssueStore } from '../issue.store';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  private issues: Issue[];

  constructor (
    private issueStore: IssueStore
  ) {}

  public ngOnInit () {
    this.issues = this.issueStore.list;
  }

  public onDelete(index: number): void {
    this.issueStore.delete(index);
  }

}
```

これでコンポーネント分割が完了しました。
