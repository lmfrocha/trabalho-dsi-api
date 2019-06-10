import { TestBed } from '@angular/core/testing';

import { VincularService } from './vincular.service';

describe('VincularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VincularService = TestBed.get(VincularService);
    expect(service).toBeTruthy();
  });
});
