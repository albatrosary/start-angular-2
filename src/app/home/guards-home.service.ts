import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  Resolve,
  CanLoad
} from '@angular/router';

import { HomeComponent } from './home.component';

@Injectable()
export class GuardsHomeService implements CanActivate, CanActivateChild, CanDeactivate<HomeComponent>, Resolve<HomeComponent>, CanLoad {

  constructor() { }

  canActivate (): boolean {
    console.log('GuardsHomeService.canActivate()');
    return true;
  }

  canActivateChild (): boolean {
    console.log('GuardsHomeService.canActivateChild()');
    return true;
  }

  canDeactivate (): boolean {
    console.log('GuardsHomeService.canDeactivate()');
    return true;
  }

  resolve (): boolean {
    console.log('GuardsHomeService.resolve()');
    return true;
  }

  canLoad (): boolean {
    console.log('GuardsHomeService.canLoad()');
    return true;
  }
}
