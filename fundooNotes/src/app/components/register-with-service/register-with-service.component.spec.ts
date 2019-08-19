import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWithServiceComponent } from './register-with-service.component';

describe('RegisterWithServiceComponent', () => {
  let component: RegisterWithServiceComponent;
  let fixture: ComponentFixture<RegisterWithServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterWithServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterWithServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
