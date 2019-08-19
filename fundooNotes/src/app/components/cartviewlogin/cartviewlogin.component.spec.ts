import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartviewloginComponent } from './cartviewlogin.component';

describe('CartviewloginComponent', () => {
  let component: CartviewloginComponent;
  let fixture: ComponentFixture<CartviewloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartviewloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartviewloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
