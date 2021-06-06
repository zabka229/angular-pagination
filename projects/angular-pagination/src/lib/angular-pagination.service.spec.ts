import { TestBed } from '@angular/core/testing';

import { AngularPaginationService } from './angular-pagination.service';

describe('AngularPaginationService', () => {
  let service: AngularPaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularPaginationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
