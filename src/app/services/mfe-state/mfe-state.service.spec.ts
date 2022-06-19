import { TestBed } from '@angular/core/testing';

import { MfeStateService } from './mfe-state.service';

describe('MfeStateService', () => {
  let service: MfeStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MfeStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
