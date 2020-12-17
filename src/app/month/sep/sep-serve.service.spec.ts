import { TestBed } from '@angular/core/testing';

import { SepServeService } from './sep-serve.service';

describe('SepServeService', () => {
  let service: SepServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SepServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
