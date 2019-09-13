import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconReminderComponent } from './icon-reminder.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material';

describe('IconReminderComponent', () => {
  let component: IconReminderComponent;
  let fixture: ComponentFixture<IconReminderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconReminderComponent ],
      imports:[
        RouterTestingModule,HttpClientModule,MatSnackBarModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
