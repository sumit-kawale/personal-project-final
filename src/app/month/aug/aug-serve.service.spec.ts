import { TestBed } from '@angular/core/testing';

import { AugServeService } from './aug-serve.service';

describe('AugServeService', () => {
  let service: AugServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AugServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
