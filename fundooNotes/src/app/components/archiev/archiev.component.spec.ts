import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchievComponent } from './archiev.component';
import { IconsComponent } from '../icons/icons.component';
import { MatMenuModule, MatIconModule, MatCardModule, MatListModule, MatAutocompleteModule, MatSnackBarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ArchievComponent', () => {
  let component: ArchievComponent;
  let fixture: ComponentFixture<ArchievComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchievComponent,
        IconsComponent
       ],
       imports:[
         MatMenuModule,
         MatIconModule,MatCardModule,MatListModule,FormsModule,ReactiveFormsModule,MatAutocompleteModule,
         HttpModule,HttpClientModule,RouterTestingModule,MatSnackBarModule
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchievComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
