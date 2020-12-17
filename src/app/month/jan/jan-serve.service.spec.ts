import { TestBed } from '@angular/core/testing';

import { JanServeService } from './jan-serve.service';

describe('JanServeService', () => {
  let service: JanServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JanServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
