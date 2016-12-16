import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  Resolve,
  CanLoad
} from '@angular/router';

import { PagesComponent } from './pages.component';

@Injectable()
export class GuardsPagesService implements CanActivate, CanActivateChild, CanDeactivate<PagesComponent>, Resolve<PagesComponent>, CanLoad {

  constructor() { }

  canActivate(): boolean {
    console.log('GuardsPagesService.canActivate()');
    return true;
  }

  canActivateChild(): boolean {
    console.log('GuardsPagesService.canActivateChild()');
    return true;
  }

  canDeactivate(): boolean {
    console.log('GuardsPagesService.canDeactivate()');
    return true;
  }

  resolve(): boolean {
    console.log('GuardsPagesService.resolve()');
    return true;
  }

  canLoad(): boolean {
    console.log('GuardsPagesService.canLoad()');
    return true;
  }
}
