import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild('sidenavList1') sidenavList:ElementRef;

  constructor() { }
  opened : Boolean;
  headingName = 'FUNDOO';
  getName(){
    this.headingName = this.sidenavList.nativeElement.innerHTML
   console.log(this.headingName);
      
  }

  ngOnInit() {

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
