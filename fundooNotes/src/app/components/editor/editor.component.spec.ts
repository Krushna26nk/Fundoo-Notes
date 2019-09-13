import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule} from '@angular/router/testing'

import { EditorComponent } from './editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FroalaEditorModule } from 'angular-froala-wysiwyg';
import { HttpClientModule } from '@angular/common/http';

describe('EditorComponent', () => {
  let component: EditorComponent;
  let fixture: ComponentFixture<EditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorComponent ],
      imports:[FormsModule,ReactiveFormsModule,
        FroalaEditorModule,HttpClientModule,RouterTestingModule,RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
