import { TestBed } from '@angular/core/testing';

import { ValidatorPersonalizadoService } from './validator-personalizado.service';

describe('ValidatorPersonalizadoService', () => {
  let service: ValidatorPersonalizadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatorPersonalizadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
