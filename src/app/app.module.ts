import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IssueComponent } from './issue/issue.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WikiComponent } from './wiki/wiki.component';

import { routing, appRoutingProviders }  from './app.routes';
import { MarkdownPipe } from './markdown.pipe';

import { IssueStore } from './issue/issue.store';
import { IssueDetailComponent } from './issue/issue-detail/issue-detail.component';
import { IssueInputComponent } from './issue/issue-input/issue-input.component';
import { IssueListComponent } from './issue/issue-list/issue-list.component';
import { IssueUpdateComponent } from './issue/issue-update/issue-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IssueComponent,
    PageNotFoundComponent,
    WikiComponent,
    MarkdownPipe,
    IssueDetailComponent,
    IssueInputComponent,
    IssueListComponent,
    IssueUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    IssueStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
