import { TestBed } from '@angular/core/testing';

import { CrestCounterService } from './crest-counter.service';

describe('CrestCounterService', () => {
  let service: CrestCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrestCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
