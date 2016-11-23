import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { IssueStore } from '../issue.store';
import { Issue } from '../issue';

@Component({
  selector: 'app-issue-update',
  templateUrl: './issue-update.component.html',
  styleUrls: ['./issue-update.component.css']
})
export class IssueUpdateComponent implements OnInit {

  private id: number;
  private title: string;
  private desc: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private issueStore: IssueStore
  ) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        this.id = +params['id'];  
        return this.issueStore.getIssue(this.id)
      })
      .subscribe(issue => {
        this.title = issue.title;
        this.desc = issue.desc;
      });
  }
  
  public onSubmit(form: NgForm): void {

    const issue = {
      title: form.value.title,
      desc: form.value.desc
    }

    this.issueStore.update(form.value.id, issue);

    this.gotoIssue(); 
  }

  private gotoIssue() {
    this.router.navigate(['/issue']);
  }

}
