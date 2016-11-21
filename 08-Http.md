# HTTP

## サーバの作成

REST処理を行うためサーバを構築します。「src/assets/server.js」として簡単なRESTサーバを作成します

```javascript
'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var server = require('http').createServer(app);
var port =  process.env.PORT || 3000;

var fs=require("fs");

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTION');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Start server
server.listen(port, process.env.OPENSHIFT_NODEJS_IP || process.env.IP || undefined, function() {
  console.log('Express server listening on %d, in %s mode', port, app.get('env'));
});

var items = require('./issues.json');

app.get('/api/issues', function(req, res) {
  res.status(200).json(items);
});

app.post('/api/issues', function(req, res) {
  items.push(req.body);
  res.status(200).json();
});

app.delete('/api/issues/:id', function(req, res) {
  var id = req.params.id;
  items.splice(id, 1);
  res.status(200).json();
});

exports = module.exports = app;
```

テストデータ(issue.json)も同じディレクトリに作成します

```json
[{
  "title": "テスト１",
  "desc": "これはテスト２"
},
{
  "title": "テスト２",
  "desc": "これはテスト２"
}]
```

コマンドライン

```
node ./src/assets/server.js
```
で起動することができます

## プロキシ設定

`ng serve`はプロキシを設定することができます。具体的には

```
ng serve --proxy-config proxy.conf.json
```

この`proxy.conf.json`は次のように定義できます

```json
{
  "/api": {
    "target": "http://localhost:3000",
    "secure": false
  }
}
```

package.jsonにプロキシ設定された簡易サーバを立ち上げるようにScriptsを記述します。

```json
  "scripts": {
    "start": "ng serve --proxy-config proxy.conf.json",
    "lint": "tslint \"src/**/*.ts\"",
    "test": "ng test",
    "pree2e": "webdriver-manager update",
    "e2e": "protractor"
  },
```

いままでは`ng serve`で起動してましたが、プロキシを利用するため`npm start`で起動します。

## サービスの書き換え

issue.store.ts

```typescript
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

import { Issue } from './issue';

@Injectable()
export class IssueStore {

  private headers = new Headers({'Content-Type': 'application/json'});

  private url = '/api/issues';

  private issues: Issue[] = [];
  
  constructor(private http: Http) { }

  public delete(index: number): Promise<Issue[]> {
    return this.http.delete(this.url+`/${index}`, {headers: this.headers})
      .toPromise()
      .then(() => this.issues.splice(index, 1))
      .catch(this.handleError);
  }
  
  public add(issue: Issue): void {
    this.http.post(this.url, JSON.stringify(issue), {headers: this.headers})
      .toPromise()
      .then(()=>this.issues.push(issue))
      .catch(this.handleError);
  }

  public allList(): Promise<Issue[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => {
        this.issues = response.json()
        return this.issues
      })
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
```

## Componentの書き換え

issue-list.componentの書き換え

```
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

  ngOnInit() {
    this.issueStore.allList()
      .then(response => this.issues = response)
      .catch(error => console.log(error));
  }
  
  public onDelete(index: number): void {
    this.issueStore.delete(index)
      .catch(error => console.log(error))
  }

}

```



