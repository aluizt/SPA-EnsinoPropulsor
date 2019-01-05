import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarVespertinoComponent } from './editar-vespertino.component';

describe('EditarVespertinoComponent', () => {
  let component: EditarVespertinoComponent;
  let fixture: ComponentFixture<EditarVespertinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarVespertinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarVespertinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
