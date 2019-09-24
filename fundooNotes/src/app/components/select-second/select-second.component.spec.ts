import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSecondComponent } from './select-second.component';

describe('SelectSecondComponent', () => {
  let component: SelectSecondComponent;
  let fixture: ComponentFixture<SelectSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
