import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditnotesComponent } from './editnotes.component';
import { MatCardModule, MatMenuModule, MatIconModule, MatFormFieldModule, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule, MatSnackBarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('EditnotesComponent', () => {
  let component: EditnotesComponent;
  let fixture: ComponentFixture<EditnotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: MatDialogRef,
        useValue: {}
      }, {
        provide: MAT_DIALOG_DATA,
        useValue: {} // Add any data you wish to test if it is passed/used correctly
      }],
      declarations: [ EditnotesComponent ],
      imports:[
        MatCardModule,MatMenuModule,MatIconModule,MatFormFieldModule,FormsModule,ReactiveFormsModule,MatDialogModule,HttpClientModule,RouterModule,
        MatSnackBarModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
