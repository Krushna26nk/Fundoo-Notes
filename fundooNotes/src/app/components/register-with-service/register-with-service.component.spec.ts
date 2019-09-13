import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWithServiceComponent } from './register-with-service.component';
import { MatFormFieldModule, MatCardModule, MatDividerModule, MatSnackBarModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RegisterWithServiceComponent', () => {
  let component: RegisterWithServiceComponent;
  let fixture: ComponentFixture<RegisterWithServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterWithServiceComponent ],
      imports:[
        MatFormFieldModule,MatCardModule,FormsModule,ReactiveFormsModule,MatDividerModule,RouterTestingModule,
        HttpClientModule,MatSnackBarModule,MatInputModule,BrowserAnimationsModule
      ]
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
