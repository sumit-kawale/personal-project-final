import { TestBed } from '@angular/core/testing';

import { AprServeService } from './apr-serve.service';

describe('AprServeService', () => {
  let service: AprServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AprServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
