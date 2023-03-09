import { TestBed } from '@angular/core/testing';

import { ValidacionGuardGuard } from './validacion-guard.guard';

describe('ValidacionGuardGuard', () => {
  let guard: ValidacionGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidacionGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
