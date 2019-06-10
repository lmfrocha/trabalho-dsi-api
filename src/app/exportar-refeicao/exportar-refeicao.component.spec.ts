import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportarRefeicaoComponent } from './exportar-refeicao.component';

describe('ExportarRefeicaoComponent', () => {
  let component: ExportarRefeicaoComponent;
  let fixture: ComponentFixture<ExportarRefeicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportarRefeicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportarRefeicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
