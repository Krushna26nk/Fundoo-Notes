import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef,MatDialog } from '@angular/material';

@Component({
  selector: 'app-editlabels',
  templateUrl: './editlabels.component.html',
  styleUrls: ['./editlabels.component.scss']
})
export class EditlabelsComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<EditlabelsComponent>,private dialog:MatDialog) { }

  label = new FormControl();
  labels : string[] =[];
  @Output()labe : EventEmitter<string[]> = new EventEmitter<string[]>();
  ngOnInit() {
  }

  updateLabel(){  
    this.dialog.closeAll();
    this.labels.push(this.label.value);
    console.log('input value',this.labels);
    this.labe.emit(this.labels);
  }
}
