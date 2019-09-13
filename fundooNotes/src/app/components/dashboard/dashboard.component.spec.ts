import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { MatIconModule, MatMenuModule, MatCardModule, MatListModule, MatDividerModule, MatToolbarModule, MatSidenavModule, MatSnackBarModule, matDialogAnimations, MatDialogModule } from '@angular/material';
import { ListgridComponent } from '../listgrid/listgrid.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, ListgridComponent ],
      imports:[BrowserAnimationsModule,
        MatIconModule,FormsModule,ReactiveFormsModule,MatMenuModule,MatCardModule,MatListModule,MatDividerModule,MatToolbarModule,MatSidenavModule,
        RouterModule,HttpClientModule,MatSnackBarModule,MatDialogModule,RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
