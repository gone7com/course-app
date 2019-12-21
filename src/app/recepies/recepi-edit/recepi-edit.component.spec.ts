import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepiEditComponent } from './recepi-edit.component';

describe('RecepiEditComponent', () => {
  let component: RecepiEditComponent;
  let fixture: ComponentFixture<RecepiEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepiEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepiEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
