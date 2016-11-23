import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'

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

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  gotoUpdate(): void {
    this.router.navigate(['/issue/update', this.rownum]);
  }

}
