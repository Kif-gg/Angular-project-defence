import { TestBed } from '@angular/core/testing';

import { ReqRepService } from './req-rep.service';

describe('ReqRepService', () => {
  let service: ReqRepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReqRepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
