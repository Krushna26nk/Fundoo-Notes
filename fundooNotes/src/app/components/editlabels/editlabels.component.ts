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
  updateDeleteLabel = new FormControl();
  labelValue =  this.updateDeleteLabel.value;
  labels : string[] =[];
  changeLabelOnHover : boolean = false

  labelArray = this.noteService.labelArray;

  userId = localStorage.getItem('userId');
  @Output()labe : EventEmitter<string[]> = new EventEmitter<string[]>();
  ngOnInit() {
  }

  /**
   * @description method to post the labels through dialog box
   */

  updateAddLabel(){  
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

  updateLabelString(){
    this.labelModal.label = this.labelValue;

    var data ={
      "label":this.labelModal.label,
      "isDeleted":false,
      "userId":this.userId
    }
    
  }
  updateLabel(item,input){
    var id = item.id;
    console.log(item.id,input);
    this.labelModal.label =  input
    var data ={
      "label":this.labelModal.label,
      "isDeleted":false,
      "id":id,
      "userId":this.userId
    }
    this.noteService.updateLabelValue(id,data);
  }

  deleteLabel(item){
    console.log(item.id);
     var data={}
     this.noteService.deleteLabel(item.id);
  }
}
