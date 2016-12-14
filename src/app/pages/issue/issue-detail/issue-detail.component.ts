import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit {

  @Input('rownum')
  rownum: number;

  @Input('title')
  title: string;

  @Input('desc')
  desc: string;

  @Output() appOnDelete = new EventEmitter();

  public onClick($event: any): void {
    this.appOnDelete.emit($event);
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  gotoUpdate(): void {
    this.router.navigate(['/pages/issue/update', this.rownum]);
  }

}
