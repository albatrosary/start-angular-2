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
