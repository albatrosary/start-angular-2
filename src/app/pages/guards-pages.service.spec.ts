/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GuardsPagesService } from './guards-pages.service';

describe('GuardsPagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardsPagesService]
    });
  });

  it('should ...', inject([GuardsPagesService], (service: GuardsPagesService) => {
    expect(service).toBeTruthy();
  }));
});
