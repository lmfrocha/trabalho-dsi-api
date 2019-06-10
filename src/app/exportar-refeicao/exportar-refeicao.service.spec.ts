import { TestBed } from '@angular/core/testing';

import { ExportarRefeicaoService } from './exportar-refeicao.service';

describe('ExportarRefeicaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExportarRefeicaoService = TestBed.get(ExportarRefeicaoService);
    expect(service).toBeTruthy();
  });
});
