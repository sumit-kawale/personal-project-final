import { TestBed } from '@angular/core/testing';

import { OctServeService } from './oct-serve.service';

describe('OctServeService', () => {
  let service: OctServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OctServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
