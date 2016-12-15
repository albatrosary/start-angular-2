import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { IssueModule } from './issue/issue.module';
import { WikiModule } from './wiki/wiki.module';

import { PagesComponent } from './pages.component';
import { TopComponent } from './top/top.component';

import { pagesRouting, pagesRoutingProviders }  from './pages.routes';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    pagesRouting,
    IssueModule,
    WikiModule
  ],
  declarations: [
    PagesComponent,
    TopComponent
  ],
  providers: [
    pagesRoutingProviders
  ]
})
export class PagesModule { }
