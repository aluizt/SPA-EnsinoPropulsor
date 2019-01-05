import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTardeComponent } from './editar-tarde.component';

describe('EditarTardeComponent', () => {
  let component: EditarTardeComponent;
  let fixture: ComponentFixture<EditarTardeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarTardeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTardeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
