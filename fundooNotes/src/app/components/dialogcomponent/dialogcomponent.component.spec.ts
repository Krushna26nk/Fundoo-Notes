import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogcomponentComponent } from './dialogcomponent.component';
import { MatToolbarModule, MatTabsModule, MatDialogModule ,MAT_DIALOG_DATA } from '@angular/material';

describe('DialogcomponentComponent', () => {
  let component: DialogcomponentComponent;
  let fixture: ComponentFixture<DialogcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogcomponentComponent ],
      imports:[MatToolbarModule,MatTabsModule,MatDialogModule]
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
