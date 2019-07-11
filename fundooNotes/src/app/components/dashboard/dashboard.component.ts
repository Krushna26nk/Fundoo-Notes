import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import { NoteService } from 'src/app/services/note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  parentMessage = 'message from parent'

  @ViewChild('sidenavList1') sidenavList:ElementRef;

  constructor(private noteService:NoteService,private router:Router) { }

  // cardArray : any =[
  //   {'title':''},
  //   {'description':''}
  // ];

  opened : Boolean;
  headingName = 'FUNDOO';
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


  }

  // sign out method to clear the previouse log in localstorage data.

  signOut(){
    localStorage.removeItem('token');
    localStorage.clear();
    this.router.navigateByUrl('login');
  }

}
