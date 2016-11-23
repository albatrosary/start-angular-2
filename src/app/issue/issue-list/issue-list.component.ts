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
