import { TestBed } from '@angular/core/testing';

import { SaqueDepositoService } from './saque-deposito.service';

describe('SaqueDepositoService', () => {
  let service: SaqueDepositoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaqueDepositoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
