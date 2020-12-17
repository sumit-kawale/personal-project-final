import { TestBed } from '@angular/core/testing';

import { DecServeService } from './dec-serve.service';

describe('DecServeService', () => {
  let service: DecServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
