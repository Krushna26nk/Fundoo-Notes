import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { EditlabelsComponent } from './editlabels.component';
import { MatIconModule, MatFormFieldModule, MatDialogModule, MAT_DIALOG_DATA, MatDialogRef, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('EditlabelsComponent', () => {
  let component: EditlabelsComponent;
  let fixture: ComponentFixture<EditlabelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: MatDialogRef,
        useValue: {}
      }, {
        provide: MAT_DIALOG_DATA,
        useValue: {} // Add any data you wish to test if it is passed/used correctly
      }],
      declarations: [ EditlabelsComponent ],
      imports:[
        MatIconModule,MatFormFieldModule,MatDialogModule,FormsModule,ReactiveFormsModule ,HttpClientModule,
        MatInputModule,BrowserAnimationsModule,
        RouterTestingModule,RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditlabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
