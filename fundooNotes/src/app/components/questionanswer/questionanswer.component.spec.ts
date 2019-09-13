import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionanswerComponent } from './questionanswer.component';
import { MatCardModule, MatFormFieldModule, MatIconModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FroalaEditorModule } from 'angular-froala-wysiwyg';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('QuestionanswerComponent', () => {
  let component: QuestionanswerComponent;
  let fixture: ComponentFixture<QuestionanswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionanswerComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports:[
        MatCardModule,MatFormFieldModule,MatIconModule,FormsModule,ReactiveFormsModule,FroalaEditorModule,
        RouterTestingModule,HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionanswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
