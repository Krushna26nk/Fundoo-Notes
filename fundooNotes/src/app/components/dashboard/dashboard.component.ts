import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';
import { NoteService } from 'src/app/services/note.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { EditlabelsComponent } from '../editlabels/editlabels.component';
import { FormControl } from '@angular/forms';
import { SearchPipe } from 'src/app/search.pipe';
import {environment} from '../../../environments/environment';
import { SharedService } from 'src/app/services/shared.service';
import { UploadimageComponent } from '../uploadimage/uploadimage.component';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  parentMessage = 'message from parent'

  @ViewChild('sidenavList1') sidenavList:ElementRef;

  constructor(private urlService:UrlService,private sharedService:SharedService,private noteService:NoteService,private router:Router,private dialog:MatDialog) { }

  // cardArray : any =[
  //   {'title':''},
  //   {'description':''}
  // ];

  opened : Boolean;
  handle :boolean = false;
  headingName = 'FUNDOO';
  labelArray : string[] =[];
  search = new FormControl();
  // searching the notes by title
  inputvalue = this.search.value;
  baseUrl1 = environment.baseUrl1;
  firstname= localStorage.getItem('firstName');
  lastname = localStorage.getItem('lastName');
  email = localStorage.getItem('email');
  token = localStorage.getItem('token')
  name = this.firstname+ " " + this.lastname;
  img =  this.baseUrl1+localStorage.getItem('profilePic');
  labelArrayList : any[] = this.noteService.labelArray

  labelname :any;

  @Output() event1 = new EventEmitter();

  getName(){
    this.headingName = this.sidenavList.nativeElement.innerHTML
   console.log(this.headingName);
      
  }


  ngOnInit() {
    this.getlabel();
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

  onGridToggle(){
    this.handle = !this.handle
    this.sharedService.getHandle(this.handle);

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
     let dialogref = this.dialog.open(EditlabelsComponent,{
       width:'25vw'
     });
    dialogref.afterClosed().subscribe(result=>{
      console.log(`label dialog result:${result}`);
    })

    this.labelArray = $event;
}


getlabel(){
  this.noteService.getlabels(this.token);
}

imageupload(){
  let dialogRef =  this.dialog.open(UploadimageComponent)
 }

getNoteOfLabel(item){
  this.labelname = item;
  console.log(item);
  this.urlService.getNoteListByLabel(item);
  
}

}
