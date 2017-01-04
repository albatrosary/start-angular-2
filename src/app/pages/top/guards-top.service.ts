import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  Resolve,
  CanLoad
} from '@angular/router';

import { TopComponent } from './top.component';

@Injectable()
export class GuardsTopService implements CanActivate, CanActivateChild, CanDeactivate<TopComponent>, CanLoad {

  constructor() { }

  canActivate(): boolean {
    console.log('GuardsTopService.canActivate()');
    return true;
  }

  canActivateChild(): boolean {
    console.log('GuardsTopService.canActivateChild()');
    return true;
  }

  canDeactivate(): boolean {
    console.log('GuardsTopService.canDeactivate()');
    return true;
  }

  canLoad(): boolean {
    console.log('GuardsTopService.canLoad()');
    return true;
  }
}
