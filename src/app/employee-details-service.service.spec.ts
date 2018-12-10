import { TestBed } from '@angular/core/testing';

import { EmployeeDetailsServiceService } from './employee-details-service.service';

describe('EmployeeDetailsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeDetailsServiceService = TestBed.get(EmployeeDetailsServiceService);
    expect(service).toBeTruthy();
  });
});
