import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesComponent } from './notes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatIconModule, MatChipsModule, MatMenuModule, MatListModule, MatAutocompleteModule, MatTooltipModule, MatCheckboxModule, MatFormFieldModule, MatSnackBarModule, MatDialogModule } from '@angular/material';
import { IconsComponent } from '../icons/icons.component';
import { GetnotesComponent } from '../getnotes/getnotes.component';
import { SearchPipe } from 'src/app/search.pipe';
import { EditorComponent } from '../editor/editor.component';
// import { QuestionanswerComponent } from '../questionanswer/questionanswer.component';
import { FroalaEditorModule } from 'angular-froala-wysiwyg';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('NotesComponent', () => {
  let component: NotesComponent;
  let fixture: ComponentFixture<NotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesComponent,IconsComponent, GetnotesComponent, SearchPipe, EditorComponent,],
      imports:[
        FormsModule,ReactiveFormsModule,MatCardModule,MatIconModule,MatChipsModule,MatMenuModule,MatListModule,
        MatAutocompleteModule,MatTooltipModule,MatCheckboxModule,MatFormFieldModule,FroalaEditorModule,HttpClientModule,
        RouterTestingModule,MatSnackBarModule,MatDialogModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
