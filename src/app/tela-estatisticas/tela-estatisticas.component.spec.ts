import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaEstatisticasComponent } from './tela-estatisticas.component';

describe('TelaEstatisticasComponent', () => {
  let component: TelaEstatisticasComponent;
  let fixture: ComponentFixture<TelaEstatisticasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaEstatisticasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaEstatisticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
