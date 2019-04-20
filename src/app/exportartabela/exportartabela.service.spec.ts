import { TestBed } from '@angular/core/testing';

import { ExportartabelaService } from './exportartabela.service';

describe('ExportartabelaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExportartabelaService = TestBed.get(ExportartabelaService);
    expect(service).toBeTruthy();
  });
});
