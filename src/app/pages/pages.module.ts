import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { IssueModule } from './issue/issue.module';

import { PagesComponent } from './pages.component';
import { WikiComponent } from './wiki/wiki.component';
import { TopComponent } from './top/top.component';

import { MarkdownPipe } from '../markdown.pipe';

import { pagesRouting, pagesRoutingProviders }  from './pages.routes';

@NgModule({
  imports: [
    IssueModule,
    FormsModule,
    BrowserModule,
    pagesRouting
  ],
  declarations: [
    PagesComponent,
    WikiComponent,
    TopComponent,
    MarkdownPipe
  ],
  providers: [
    pagesRoutingProviders
  ],
})
export class PagesModule { }
