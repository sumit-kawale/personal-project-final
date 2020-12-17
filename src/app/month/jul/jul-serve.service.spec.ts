import { TestBed } from '@angular/core/testing';

import { JulServeService } from './jul-serve.service';

describe('JulServeService', () => {
  let service: JulServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JulServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
