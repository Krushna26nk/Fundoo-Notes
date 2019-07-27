import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, TableService } from '@syncfusion/ej2-angular-richtexteditor';
import { createElement, MouseEventArgs, addClass, removeClass, Browser } from '@syncfusion/ej2-base';
import * as CodeMirror from 'codemirror';
import { FormGroup, FormControl } from '@angular/forms';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  constructor(private noteService:NoteService) { }

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


          ngAfterViewInit(): void {
            let rteObj: RichTextEditorComponent = this.rteObj;
            setTimeout(() => { this.textArea = rteObj.contentModule.getEditPanel() as HTMLElement; }, 600);
          }



ngOnInit(){

}
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

onSubmit(){
  var message = this.editorForm.controls.editor.value;
  console.log(message);
  console.log(this.NoteForChild.id);

  var data = {
    "message":message,
    "notesId":this.NoteForChild.id
  }
  var url="questionAndAnswerNotes/addQuestionAndAnswer"
  this.noteService.postQuestion(data,url).subscribe((response:any)=>{
    console.log(response);
    
  });
  
}

}
