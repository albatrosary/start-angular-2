/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GuardsIssueService } from './guards-issue.service';

describe('GuardsIssueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardsIssueService]
    });
  });

  it('should ...', inject([GuardsIssueService], (service: GuardsIssueService) => {
    expect(service).toBeTruthy();
  }));
});
