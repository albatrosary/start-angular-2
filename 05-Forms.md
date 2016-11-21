# 05 Forms

issueを保存するための型を定義します

```bash
$ ng g class issue/issue
```

内容は

```typescript
export class Issue {
  title: string;
  desc: string;
}
```

`issue.component.ts`ファイルは次のようになります

```typescript
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Issue } from './issue';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  private issue: Issue;
  private issues: Issue[];

  constructor () {}

  ngOnInit(): void {
    this.issue = new Issue;
    this.issues = [];
  }

  public onSubmit(form: NgForm): void {
    const issue = {
      title: form.value.title,
      desc: form.value.desc
    }

    this.issues.push(issue);

    form.reset();
  }

  public onDelete(index: number): void {
    this.issues.splice(index, 1);
  }

}
```

issue.component.html は

```html
<h2>Issue</h2>

<form #f="ngForm" (ngSubmit)="onSubmit(f)" novalidate>
  <input name="title" ngModel required placeholder="title">
  <textarea name="desc" ngModel required placeholder="desc"></textarea>
  <button type=submit [disabled]="!f.form.valid">登録</button>
</form>

<div ngClass="issues" *ngFor="let issue of issues; let i = index">
  <div ngClass="row">{{i+1}}</div>
  <button (click)="onDelete(i)">削除</button>
  <p>{{issue.title}}</p>
  <pre>{{issue.desc}}</pre>
</div>
```
