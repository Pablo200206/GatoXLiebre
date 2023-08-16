import { TestBed } from '@angular/core/testing';

import { AuthenthificationService } from './authenthification.service';

describe('AuthenthificationService', () => {
  let service: AuthenthificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenthificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
