import { TestBed } from '@angular/core/testing';

import { ExturlresolverService } from './exturlresolver.service';

describe('ExturlresolverService', () => {
  let service: ExturlresolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExturlresolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
