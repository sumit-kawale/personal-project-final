import { TestBed } from '@angular/core/testing';

import { JunServeService } from './jun-serve.service';

describe('JunServeService', () => {
  let service: JunServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JunServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
