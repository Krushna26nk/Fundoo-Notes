import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import * as $ from 'jquery';
import { NoteService } from 'src/app/services/note.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { EditlabelsComponent } from '../editlabels/editlabels.component';
import { FormControl } from '@angular/forms';
import { SearchPipe } from 'src/app/search.pipe';
import { SharedService } from 'src/app/services/shared.service';
import { UploadimageComponent } from '../uploadimage/uploadimage.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  parentMessage = 'message from parent'

  @ViewChild('sidenavList1') sidenavList:ElementRef;

  constructor(private sharedService:SharedService,private router:Router,private dialog:MatDialog) { }

  // cardArray : any =[
  //   {'title':''},
  //   {'description':''}
  // ];

  opened : Boolean;
  headingName = 'FUNDOO';
  labelArray : string[] =[];
  search = new FormControl();
  inputvalue = this.search.value;



  getName(){
    this.headingName = this.sidenavList.nativeElement.innerHTML
   console.log(this.headingName);
      
  }


  ngOnInit() {

    // this.getNote();
    // jQuery to handle the active class onclick on the sidenav list 

    $('.listItems div').on('click',function(){
      if($(this).hasClass('active')){
                return false
      }
      else{
      $('.listItems div').removeClass('active');  
      $(this).addClass('active');
      }
    })

    this.sharedService.parentData = this.inputvalue;


  }
  onKey(event){
    console.log(event);  
    this.sharedService.inputvalueArray =event;  
    console.log(this.sharedService.inputvalueArray);
    
  }

  // sign out method to clear the previouse log in localstorage data.

  signOut(){
    localStorage.removeItem('token');
    localStorage.clear();
    this.router.navigateByUrl('login');
  }

  editLabels($event){
     let dialogref = this.dialog.open(EditlabelsComponent);
    dialogref.afterClosed().subscribe(result=>{
      console.log(`label dialog result:${result}`);
    })

    this.labelArray = $event;
}

imageupload(){
  let dialogRef =  this.dialog.open(UploadimageComponent)
 }
}
