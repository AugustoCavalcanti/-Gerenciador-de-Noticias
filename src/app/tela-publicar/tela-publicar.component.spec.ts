import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaPublicarComponent } from './tela-publicar.component';

describe('TelaPublicarComponent', () => {
  let component: TelaPublicarComponent;
  let fixture: ComponentFixture<TelaPublicarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaPublicarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaPublicarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
