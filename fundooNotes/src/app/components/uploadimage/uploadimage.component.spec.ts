import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadimageComponent } from './uploadimage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

describe('UploadimageComponent', () => {
  let component: UploadimageComponent;
  let fixture: ComponentFixture<UploadimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: MatDialogRef,
        useValue: {}
      }, {
        provide: MAT_DIALOG_DATA,
        useValue: {} // Add any data you wish to test if it is passed/used correctly
      }],
      declarations: [ UploadimageComponent ],
      imports:[
        FormsModule,ReactiveFormsModule,HttpClientModule,RouterTestingModule,MatSnackBarModule,MatDialogModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
