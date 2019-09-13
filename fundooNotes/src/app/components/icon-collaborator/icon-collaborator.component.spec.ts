import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCollaboratorComponent } from './icon-collaborator.component';
import { MatIconModule, MatDividerModule, MatAutocompleteModule, MatDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('IconCollaboratorComponent', () => {
  let component: IconCollaboratorComponent;
  let fixture: ComponentFixture<IconCollaboratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconCollaboratorComponent ],
      imports:[MatIconModule,MatDividerModule,MatAutocompleteModule,FormsModule,ReactiveFormsModule,
                MatDialogModule,HttpClientModule,RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconCollaboratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
