import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  Resolve,
  CanLoad
} from '@angular/router';

import { IssueComponent } from './issue.component';

@Injectable()
export class GuardsIssueService implements CanActivate, CanActivateChild, CanDeactivate<IssueComponent>, CanLoad {

  constructor() { }

  canActivate(): boolean {
    console.log('GuardsIssueService.canActivate()');
    return true;
  }

  canActivateChild(): boolean {
    console.log('GuardsIssueService.canActivateChild()');
    return true;
  }

  canDeactivate(): boolean {
    console.log('GuardsIssueService.canDeactivate()');
    return true;
  }

  canLoad(): boolean {
    console.log('GuardsIssueService.canLoad()');
    return true;
  }
}
