import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef,MatDialog } from '@angular/material';
import { Notelabel } from 'src/app/modal/notelabel';
import { UrlService } from 'src/app/services/user.service';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-editlabels',
  templateUrl: './editlabels.component.html',
  styleUrls: ['./editlabels.component.scss']
})
export class EditlabelsComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<EditlabelsComponent>,private dialog:MatDialog,private noteService:NoteService) { }

  labelModal: Notelabel = new Notelabel();
  token = localStorage.getItem('token');
  label = new FormControl();
  labels : string[] =[];
  userId = localStorage.getItem('userId');
  @Output()labe : EventEmitter<string[]> = new EventEmitter<string[]>();
  ngOnInit() {
  }

  updateLabel(){  
    this.dialog.closeAll();

    this.labelModal.label = this.label.value;
    var data ={
      "label":this.labelModal.label,
      "isDeleted":false,
      "userId":this.userId
    }

    this.noteService.postLabel(data);

    this.labels.push(this.label.value);
    console.log('input value',this.labels);
    this.labe.emit(this.labels);
  }
}
