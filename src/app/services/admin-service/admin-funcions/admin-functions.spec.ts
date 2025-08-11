import { TestBed } from '@angular/core/testing';

import { AdminFunctions } from './admin-functions';

describe('AdminFunctions', () => {
  let service: AdminFunctions;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminFunctions);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
