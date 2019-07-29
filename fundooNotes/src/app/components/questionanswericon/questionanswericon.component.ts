import { Component,Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NoteService } from 'src/app/services/note.service';
import { RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
import { createElement, MouseEventArgs, addClass, removeClass, Browser } from '@syncfusion/ej2-base';
import * as CodeMirror from 'codemirror';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-questionanswericon',
  templateUrl: './questionanswericon.component.html',
  styleUrls: ['./questionanswericon.component.scss']
})
export class QuestionanswericonComponent implements OnInit {

  constructor(private noteService:NoteService, private dialog:MatDialog ) { }
  @Input() question:any;
  @Input() mesg:any;
  @Input() questionId:any; 
  booleanreply:boolean=false;
  like:boolean= false;

  @Input() NoteForChild:any;

          @ViewChild('toolsRTE') public rteObj: RichTextEditorComponent;
          public tools: object = {
              items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
              'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
              'LowerCase', 'UpperCase', '|',
              'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
              'Outdent', 'Indent', '|',
              'CreateTable', 'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
              'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
          };
          public maxLength: number = 1000;
          public textArea: HTMLElement;
          public myCodeMirror: any;
          editorForm = new FormGroup({
            "editor" : new FormControl()
          });

          ngOnInit() {
            console.log(this.question);
            console.log(this.mesg);
          }

          // ngAfterViewInit(): void {
          //   let rteObj: RichTextEditorComponent = this.rteObj;
          //   setTimeout(() => { this.textArea = rteObj.contentModule.getEditPanel() as HTMLElement; }, 600);
          // }


public mirrorConversion(e?: any): void {
  let id: string = this.rteObj.getID() + 'mirror-view';
  let mirrorView: HTMLElement = this.rteObj.element.querySelector('#' + id) as HTMLElement;
  let charCount: HTMLElement = this.rteObj.element.querySelector('.e-rte-character-count') as HTMLElement;
  if (e.targetItem === 'Preview') {
      this.textArea.style.display = 'block';
      mirrorView.style.display = 'none';
      this.textArea.innerHTML = this.myCodeMirror.getValue();
      charCount.style.display = 'block';
  } else {
      if (!mirrorView) {
          mirrorView = createElement('div', { className: 'e-content' });
          mirrorView.id = id;
          this.textArea.parentNode.appendChild(mirrorView);
      } else {
          mirrorView.innerHTML = '';
      }
      this.textArea.style.display = 'none';
      mirrorView.style.display = 'block';
      this.renderCodeMirror(mirrorView, this.rteObj.value);
      charCount.style.display = 'none';
  }
}

public renderCodeMirror(mirrorView: HTMLElement, content: string): void {
  this.myCodeMirror = CodeMirror(mirrorView, {
      value: content,
      lineNumbers: true,
      mode: 'text/html',
      lineWrapping: true,

  });
}
public handleFullScreen(e: any): void {
  const sbCntEle: HTMLElement = document.querySelector('.sb-content.e-view');
  const sbHdrEle: HTMLElement = document.querySelector('.sb-header.e-view');
  const leftBar: HTMLElement = document.querySelector('#left-sidebar');
  if (e.targetItem === 'Maximize') {
      if (Browser.isDevice && Browser.isIos) {
          addClass([sbCntEle, sbHdrEle], ['hide-header']);
      }
      addClass([leftBar], ['e-close']);
      removeClass([leftBar], ['e-open']);
  } else if (e.targetItem === 'Minimize') {
      if (Browser.isDevice && Browser.isIos) {
          removeClass([sbCntEle, sbHdrEle], ['hide-header']);
      }
      removeClass([leftBar], ['e-close']);
      if (!Browser.isDevice) {
      addClass([leftBar], ['e-open']); }
  }
}
public actionCompleteHandler(e: any): void {
  if (e.targetItem && (e.targetItem === 'SourceCode' || e.targetItem === 'Preview')) {
      (this.rteObj.sourceCodeModule.getPanel() as HTMLTextAreaElement).style.display = 'none';
      this.mirrorConversion(e);
  } else {
      setTimeout(() => { this.rteObj.toolbarModule.refreshToolbarOverflow(); }, 400);
  }
}




onLike(){
this.like = true;
console.log(this.like);
var id = this.questionId
var data ={
  "like":true
}
this.noteService.postLike(data,id).subscribe((response:any)=>{
  console.log(response);
});
}



onSubmit(){
  var message = this.editorForm.controls.editor.value;
  console.log('reply msg  ',message);
  // console.log(this.NoteForChild.id);
  var id = this.questionId;
  console.log('question id',id);
  console.log(this.like);
  
  var data = {
    "message":message,
  }
  
  this.noteService.postReply(data,id).subscribe((response:any)=>{
    console.log(response);
  });
  this.dialog.closeAll();
  
}



  openEditor(app){
    this.dialog.open(app);
  }

}
