import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { TopComponent } from './top/top.component';
import { IssueComponent } from './issue/issue.component';
import { IssueUpdateComponent } from './issue/issue-update/issue-update.component';
import { WikiComponent } from './wiki/wiki.component';

const pagesRoutes: Routes = [
  { path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'top', pathMatch: 'full'},
      { path: 'top', component: TopComponent, data: {title: 'Top'} },
      { path: 'issue', component: IssueComponent, data: {title: 'Issue'} },
      { path: 'issue/update/:id', component: IssueUpdateComponent, data: {title: 'Issue Update'} },
      { path: 'wiki', component: WikiComponent, data: {title: 'Wiki'} }
    ]
  }
];

export const pagesRoutingProviders: any[] = [];

export const pagesRouting: ModuleWithProviders = RouterModule.forChild(pagesRoutes);
