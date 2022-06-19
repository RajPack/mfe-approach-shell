import { TestBed } from '@angular/core/testing';

import { PdpMfeResolverService } from './pdp-mfe-resolver.service';

describe('PdpMfeResolverService', () => {
  let service: PdpMfeResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdpMfeResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
