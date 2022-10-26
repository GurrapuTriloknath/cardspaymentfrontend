import { TestBed } from '@angular/core/testing';

import { CardspaymentService } from './cardspayment.service';

describe('CardspaymentService', () => {
  let service: CardspaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardspaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
