/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GuardsHomeService } from './guards-home.service';

describe('GuardsHomeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardsHomeService]
    });
  });

  it('should ...', inject([GuardsHomeService], (service: GuardsHomeService) => {
    expect(service).toBeTruthy();
  }));
});
