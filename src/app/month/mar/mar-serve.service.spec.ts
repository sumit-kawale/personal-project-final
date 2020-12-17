import { TestBed } from '@angular/core/testing';

import { MarServeService } from './mar-serve.service';

describe('MarServeService', () => {
  let service: MarServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
