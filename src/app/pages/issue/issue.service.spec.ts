/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IssueService } from './issue.service';

describe('IssueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IssueService]
    });
  });

  it('should ...', inject([IssueService], (service: IssueService) => {
    expect(service).toBeTruthy();
  }));
});
