import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsComponent } from './icons.component';
import { MatIconModule, MatMenuModule, MatListModule, MatOptionModule, MatAutocompleteModule, MatDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('IconsComponent', () => {
  let component: IconsComponent;
  let fixture: ComponentFixture<IconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsComponent ],
      imports:[
        MatIconModule,MatMenuModule,MatListModule,MatOptionModule,FormsModule,ReactiveFormsModule,MatAutocompleteModule,
        HttpClientModule,RouterTestingModule,MatDialogModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
