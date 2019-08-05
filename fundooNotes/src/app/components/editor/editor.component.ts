import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, TableService } from '@syncfusion/ej2-angular-richtexteditor';
import { createElement, MouseEventArgs, addClass, removeClass, Browser } from '@syncfusion/ej2-base';
import * as CodeMirror from 'codemirror';
import { FormGroup, FormControl } from '@angular/forms';
import { NoteService } from 'src/app/services/note.service';
import { RefreshService } from 'src/app/services/refresh.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  constructor(private noteService:NoteService,private refreshService:RefreshService,private router:Router) { }

  @Input() NoteForChild:any;
  title:string;
  description:string;
  noteId :any

          editorForm = new FormGroup({
            "editor" : new FormControl()
          });
          

ngOnInit(){
  this.refreshService.currentMessage.subscribe((data:any)=>{
    console.log(data);
    this.title = data.title;
    this.description = data.description;
    this.noteId = data.id
  })
}




onSubmit(){
  var message = this.editorForm.controls.editor.value;
  console.log(message);
  console.log(this.noteId);

  var data = {
    "message":message,
    "notesId":this.noteId
  }
  var url="questionAndAnswerNotes/addQuestionAndAnswer"
  this.noteService.postQuestion(data,url).subscribe((response:any)=>{
    this.refreshService.changeMessage('jjf')
    console.log(response);
  });

  this.router.navigateByUrl('dashboard');
  
}

}
