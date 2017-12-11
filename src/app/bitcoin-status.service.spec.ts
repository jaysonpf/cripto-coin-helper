import { TestBed, inject } from '@angular/core/testing';

import { BitcoinStatusService } from './bitcoin-status.service';

describe('BitcoinStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BitcoinStatusService]
    });
  });

  it('should be created', inject([BitcoinStatusService], (service: BitcoinStatusService) => {
    expect(service).toBeTruthy();
  }));
});
