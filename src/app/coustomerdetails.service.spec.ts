import { TestBed } from '@angular/core/testing';

import { CoustomerdetailsService } from './coustomerdetails.service';

describe('CoustomerdetailsService', () => {
  let service: CoustomerdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoustomerdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
