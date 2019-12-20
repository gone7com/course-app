import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRecepiesComponent } from './select-recepies.component';

describe('SelectRecepiesComponent', () => {
  let component: SelectRecepiesComponent;
  let fixture: ComponentFixture<SelectRecepiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectRecepiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRecepiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
