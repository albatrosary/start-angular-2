import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { IssueComponent } from './issue/issue.component';
import { IssueUpdateComponent } from './issue/issue-update/issue-update.component';
import { TopComponent } from './top/top.component';
import { WikiComponent } from './wiki/wiki.component';

import { GuardsPagesService } from './guards-pages.service';
import { GuardsIssueService } from './issue/guards-issue.service';
import { GuardsTopService } from './top/guards-top.service';
import { GuardsWikiService } from './wiki/guards-wiki.service';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [GuardsPagesService],
    canActivateChild: [GuardsPagesService],
    canDeactivate: [GuardsPagesService],
    canLoad: [GuardsPagesService],
    children: [
      { path: '', redirectTo: 'top', pathMatch: 'full' },
      {
        path: 'top',
        component: TopComponent,
        canActivate: [GuardsTopService],
        canActivateChild: [GuardsTopService],
        canDeactivate: [GuardsTopService],
        canLoad: [GuardsTopService],
        data: { title: 'Top' }
      },
      {
        path: 'issue',
        component: IssueComponent,
        canActivate: [GuardsIssueService],
        canActivateChild: [GuardsIssueService],
        canDeactivate: [GuardsIssueService],
        canLoad: [GuardsIssueService],
        data: { title: 'Issue' }
      },
      {
        path: 'issue/update/:id',
        component: IssueUpdateComponent,
        data: { title: 'Issue Update' }
      },
      {
        path: 'wiki',
        component: WikiComponent,
        canActivate: [GuardsWikiService],
        canActivateChild: [GuardsWikiService],
        canDeactivate: [GuardsWikiService],
        canLoad: [GuardsWikiService],
        data: { title: 'Wiki' }
      }
    ]
  }
];

export const pagesRoutingProviders: any[] = [];

export const pagesRouting: ModuleWithProviders = RouterModule.forChild(pagesRoutes);
