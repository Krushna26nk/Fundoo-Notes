import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild('sidenavList1') sidenavList:ElementRef;

  constructor(private noteService:NoteService) { }

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

  // getNote(){
  //   this.cardArray = this.noteService.dataArray;
  //   console.log("dashboard data",this.cardArray);
    
  // }

  ngOnInit() {

    // this.getNote();

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

}
