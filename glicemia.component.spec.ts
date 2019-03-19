import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlicemiaComponent } from './glicemia.component';

describe('GlicemiaComponent', () => {
  let component: GlicemiaComponent;
  let fixture: ComponentFixture<GlicemiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlicemiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlicemiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
