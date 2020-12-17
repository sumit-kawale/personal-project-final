import { TestBed } from '@angular/core/testing';

import { FebServeService } from './feb-serve.service';

describe('FebServeService', () => {
  let service: FebServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FebServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
