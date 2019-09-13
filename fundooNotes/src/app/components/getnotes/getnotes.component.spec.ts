import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetnotesComponent } from './getnotes.component';
import { SearchPipe } from 'src/app/search.pipe';
import { MatIconModule, MatChipsModule, MatMenuModule, MatListModule, MatTooltipModule, MatCheckboxModule, MatCardModule, MatAutocompleteModule, MatSnackBarModule, MatDialogModule } from '@angular/material';
import { EditorComponent } from '../editor/editor.component';
import { QuestionanswerComponent } from '../questionanswer/questionanswer.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';

describe('GetnotesComponent', () => {
  let component: GetnotesComponent;
  let fixture: ComponentFixture<GetnotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers:[],
      declarations: [ GetnotesComponent,EditorComponent,QuestionanswerComponent,SearchPipe ],
      schemas: [NO_ERRORS_SCHEMA],
      imports:[
        MatIconModule,MatChipsModule,MatMenuModule,MatListModule,MatTooltipModule,MatSnackBarModule,MatDialogModule,
        MatCheckboxModule,MatCardModule,MatAutocompleteModule,HttpClientModule,RouterTestingModule,RichTextEditorAllModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
