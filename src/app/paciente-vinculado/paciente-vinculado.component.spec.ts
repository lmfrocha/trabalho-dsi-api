import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteVinculadoComponent } from './paciente-vinculado.component';

describe('PacienteVinculadoComponent', () => {
  let component: PacienteVinculadoComponent;
  let fixture: ComponentFixture<PacienteVinculadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteVinculadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteVinculadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
