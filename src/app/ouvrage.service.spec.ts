import { TestBed } from '@angular/core/testing';

import { OuvrageService } from './ouvrage.service';

describe('OuvrageService', () => {
  let service: OuvrageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OuvrageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
