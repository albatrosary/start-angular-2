import { Component, OnInit } from'@angular/core';
import { NgForm } from'@angular/forms';

import { IssueService } from'../issue.service';

@Component({
  selector: 'app-issue-input',
  templateUrl: './issue-input.component.html',
  styleUrls: ['./issue-input.component.scss']
})
export class IssueInputComponent implements OnInit {

  constructor(
    private issueService: IssueService
  ) {
  }

  ngOnInit() {
  }

  public onSubmit(form: NgForm): void {

    const issue = {
      title: form.value.title,
      desc: form.value.desc
    };

    this.issueService.add(issue);

    form.reset();
  }

}
