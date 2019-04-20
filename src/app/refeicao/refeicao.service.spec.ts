import { TestBed } from '@angular/core/testing';

import { RefeicaoService } from './refeicao.service';

describe('RefeicaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RefeicaoService = TestBed.get(RefeicaoService);
    expect(service).toBeTruthy();
  });
});
