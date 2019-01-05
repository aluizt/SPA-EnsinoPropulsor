import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarNoiteComponent } from './editar-noite.component';

describe('EditarNoiteComponent', () => {
  let component: EditarNoiteComponent;
  let fixture: ComponentFixture<EditarNoiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarNoiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarNoiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
