import { TestBed } from '@angular/core/testing';

import { PacienteVinculadoService } from './paciente-vinculado.service';

describe('PacienteVinculadoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PacienteVinculadoService = TestBed.get(PacienteVinculadoService);
    expect(service).toBeTruthy();
  });
});
