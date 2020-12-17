import { TestBed } from '@angular/core/testing';

import { NovServeService } from './nov-serve.service';

describe('NovServeService', () => {
  let service: NovServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
