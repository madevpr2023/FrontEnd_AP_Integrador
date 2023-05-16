import { TestBed } from '@angular/core/testing';

import { EducacioncompService } from './educacioncomp.service';

describe('EducacioncompService', () => {
  let service: EducacioncompService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducacioncompService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
