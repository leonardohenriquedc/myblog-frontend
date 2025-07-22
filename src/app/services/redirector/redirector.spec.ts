import { TestBed } from '@angular/core/testing';

import { Redirector } from './redirector';

describe('Redirector', () => {
  let service: Redirector;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Redirector);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
