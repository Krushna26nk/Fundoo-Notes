import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { RefreshService } from 'src/app/services/refresh.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dialogcomponent',
  templateUrl: './dialogcomponent.component.html',
  styleUrls: ['./dialogcomponent.component.scss']
})
export class DialogcomponentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data:any,private dialog:MatDialog,private dialogRef:MatDialogRef<DialogcomponentComponent> , private refreshService :RefreshService,private router:Router) { }
  selectServiceData :any;
  allData :any;

  ngOnInit() {
    this.selectServiceData = this.data.data;
    this.allData = this.data.data;

    this.data.data.forEach(element => {
      if(element.selected == true){
        this.selectServiceData = element;
      }
    });

    console.log(this.selectServiceData);
  }

  onRemove(){
    this.dialogRef.close();
  }
  onCheckOut(){
    this.refreshService.changeMessage(this.allData);
    this.dialog.closeAll();
    this.router.navigateByUrl('registerWithService');
    // this.onRemove();
  }


}
