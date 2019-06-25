import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaDenoticiasComponent } from './tela-denoticias.component';

describe('TelaDenoticiasComponent', () => {
  let component: TelaDenoticiasComponent;
  let fixture: ComponentFixture<TelaDenoticiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaDenoticiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaDenoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
