import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainderComponent } from './remainder.component';
import { MatIconModule, MatChipsModule, MatMenuModule, MatTooltipModule, MatCardModule, MatSnackBarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('RemainderComponent', () => {
  let component: RemainderComponent;
  let fixture: ComponentFixture<RemainderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemainderComponent ],
      imports:[
        MatIconModule,MatChipsModule,MatMenuModule,MatTooltipModule,MatCardModule,HttpClientModule,RouterTestingModule,MatSnackBarModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemainderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
