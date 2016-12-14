import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {
  wiki: string;

  constructor() { }

  ngOnInit() {
    this.wiki = localStorage.getItem('amke');
  }

}