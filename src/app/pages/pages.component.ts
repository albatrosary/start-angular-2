import { Component, OnInit, Input, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  animations: [
    trigger('state', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active', style({
        borderBottom: '2px solid #333333',
        transform: 'scale(1.2)'
      })),
      transition('inactive => active', animate('300ms ease-in')),
      transition('active => inactive', animate('300ms ease-out'))
    ])
  ]
})
export class PagesComponent implements OnInit {

  state: string;

  links = [{
    url: 'top',
    name: 'Top',
    state: 'active'
  },{
    url: 'issue',
    name: 'Issue',
    state: 'inactive' 
  },{
    url: 'wiki',
    name: 'Wiki',
    state: 'inactive' 
  }];
  
  constructor() {
    this.state = 'inactive';
  }

  ngOnInit() {
  }

  onClick(i) {
    for (let i=0; i<this.links.length; i++) {
      this.links[i].state = 'inactive';
    }
    this.links[i].state = 'active';
  }
}
