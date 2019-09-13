import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogcomponentComponent } from './dialogcomponent.component';
import { MatToolbarModule, MatTabsModule, MatDialogModule ,MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DialogcomponentComponent', () => {
  let component: DialogcomponentComponent;
  let fixture: ComponentFixture<DialogcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: MatDialogRef,
        useValue: {}
      }, {
        provide: MAT_DIALOG_DATA,
        useValue: {} // Add any data you wish to test if it is passed/used correctly
      }],
      declarations: [ DialogcomponentComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports:[ HttpClientModule,
        MatToolbarModule,MatTabsModule,MatDialogModule,RouterTestingModule,BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
