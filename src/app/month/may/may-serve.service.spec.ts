import { TestBed } from '@angular/core/testing';

import { MayServeService } from './may-serve.service';

describe('MayServeService', () => {
  let service: MayServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MayServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
