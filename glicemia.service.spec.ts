import { TestBed } from '@angular/core/testing';

import { GlicemiaService } from './glicemia.service';

describe('GlicemiaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlicemiaService = TestBed.get(GlicemiaService);
    expect(service).toBeTruthy();
  });
});
