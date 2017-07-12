import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

import { Issue } from './issue';

@Injectable()
export class IssueService {

  private headers = new Headers({'Content-Type': 'application/json'});

  private url = '/api/issues';

  constructor(private http: Http) { }

  private issues: Issue[] = [];

  public delete(index: number): Promise<Issue[]> {
    return this.http.delete(this.url + `/${index}`, { headers: this.headers })
      .toPromise()
      .then(() => this.issues.splice(index, 1))
      .catch(this.handleError);
  }

  public add(issue: Issue): void {
    this.http.post(this.url, JSON.stringify(issue), { headers: this.headers })
      .toPromise()
      .then(() => this.issues.push(issue))
      .catch(this.handleError);
  }

  public update(id: number, issue: Issue): void {
    let udata = {
      id: id,
      issue: JSON.stringify(issue)
    };

    this.http.put(this.url, udata, {headers: this.headers})
      .toPromise()
      .catch(this.handleError);
  }

  public getList(): Promise<Issue[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => {
        this.issues = response.json();
        return this.issues;
      })
      .catch(this.handleError);
  }

  public getIssue(id: number): Promise<Issue> {
    return this.http.get(this.url + `/${id}`)
      .toPromise()
      .then(response => {
        return response.json();
      })
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
