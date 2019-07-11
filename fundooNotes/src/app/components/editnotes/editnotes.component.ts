import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { FormControl } from '@angular/forms';
import { UrlService } from 'src/app/services/url.service';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-editnotes',
  templateUrl: './editnotes.component.html',
  styleUrls: ['./editnotes.component.scss']
})
export class EditnotesComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<EditnotesComponent>,@Inject(MAT_DIALOG_DATA) public data:any,private dialog:MatDialog,private urlService:UrlService,private noteService:NoteService) { }

  ngOnInit() {
  }

  title = new FormControl(this.data.title)
  description = new FormControl(this.data.description)
  
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
  
}
