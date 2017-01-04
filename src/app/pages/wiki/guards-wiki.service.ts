import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  Resolve,
  CanLoad
} from '@angular/router';

import { WikiComponent } from './wiki.component';

@Injectable()
export class GuardsWikiService implements CanActivate, CanActivateChild, CanDeactivate<WikiComponent>, CanLoad {

  constructor() { }

  canActivate(): boolean {
    console.log('GuardsWikiService.canActivate()');
    return true;
  }

  canActivateChild(): boolean {
    console.log('GuardsWikiService.canActivateChild()');
    return true;
  }

  canDeactivate(): boolean {
    console.log('GuardsWikiService.canDeactivate()');
    return true;
  }

  canLoad(): boolean {
    console.log('GuardsWikiService.canLoad()');
    return true;
  }
}
