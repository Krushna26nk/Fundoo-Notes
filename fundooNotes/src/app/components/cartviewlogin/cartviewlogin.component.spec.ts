import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartviewloginComponent } from './cartviewlogin.component';
import {MatCardModule, MatDialogModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

describe('CartviewloginComponent', () => {
  let component: CartviewloginComponent;
  let fixture: ComponentFixture<CartviewloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartviewloginComponent ],
      imports:[MatCardModule,MatDialogModule,HttpClientModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartviewloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
