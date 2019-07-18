import { Component, OnInit, Inject ,Input,EventEmitter,Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { FormControl } from '@angular/forms';
import { UrlService } from 'src/app/services/url.service';
import { NoteService } from 'src/app/services/note.service';
import { Note } from 'src/app/modal/note';

@Component({
  selector: 'app-editnotes',
  templateUrl: './editnotes.component.html',
  styleUrls: ['./editnotes.component.scss']
})
export class EditnotesComponent implements OnInit {

  note : Note = new Note();

  colors : string[] = [
    '#659DBD','#F78888','#90CCF4','#B1A296','#808080','#AFD275','#FFC0CB','#D79922'
  ]

  constructor(public dialogRef:MatDialogRef<EditnotesComponent>,@Inject(MAT_DIALOG_DATA) public data:any,private dialog:MatDialog,private urlService:UrlService,private noteService:NoteService) { }

  @Input() color:string
  @Output() event = new EventEmitter();
  newColor:any;


  ngOnInit() {
  }


  title = new FormControl(this.data.title)
  description = new FormControl(this.data.description)
  id = this.data.id;
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  updateNote(){

this.dialog.closeAll();

    var data={
      "noteId":this.data.id,
      "title":this.title.value, 
      "description":this.description.value,
      "color":this.data.color
    }

    if(data != null){
      console.log('daf',data);
      
      this.urlService.updateNote(data);
    }
    else{
      console.log('closed');
      
    }
  }

  updateColor($event){
    this.newColor = $event;
    console.log('color',$event);
    
    this.note.color = this.newColor;
    var data ={
      "color":this.newColor,
      "noteIdList":[this.id],
    }
    console.log('asds',data);
    
    this.urlService.updateColor(data);
  }
  
}
