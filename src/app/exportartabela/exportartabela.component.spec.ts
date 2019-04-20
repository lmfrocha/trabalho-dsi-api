import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportartabelaComponent } from './exportartabela.component';

describe('ExportartabelaComponent', () => {
  let component: ExportartabelaComponent;
  let fixture: ComponentFixture<ExportartabelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportartabelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportartabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
