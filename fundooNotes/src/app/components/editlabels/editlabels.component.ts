import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef,MatDialog } from '@angular/material';
import { Notelabel } from 'src/app/modal/notelabel';
import { NoteService } from 'src/app/services/note.service';
import { RefreshService } from 'src/app/services/refresh.service';

@Component({
  selector: 'app-editlabels',
  templateUrl: './editlabels.component.html',
  styleUrls: ['./editlabels.component.scss']
})
export class EditlabelsComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<EditlabelsComponent>,private dialog:MatDialog,private noteService:NoteService,
              private refreshService:RefreshService) { }

  labelModal: Notelabel = new Notelabel();
  token = localStorage.getItem('token');
  label = new FormControl();
  updateDeleteLabel = new FormControl();
  labelValue =  this.updateDeleteLabel.value;
  labels : string[] =[];
  changeLabelOnHover : boolean = false

  labelArray = this.noteService.labelArray;
  item = new FormControl();
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

    this.noteService.postLabel(data).subscribe((response:any)=>{
      console.log('label add response',response);
      this.refreshService.changeMessage(response);
    });
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
    this.noteService.updateLabelValue(id,data).subscribe((response:any)=>{
      console.log(response);
      this.refreshService.changeMessage(response);
    });
  }

  deleteLabel(item){
    console.log(item.id);
     var data={}
     this.noteService.deleteLabel(item.id).subscribe((response:any) =>{
      console.log(response);
      this.refreshService.changeMessage(response);
    });
  }
}
