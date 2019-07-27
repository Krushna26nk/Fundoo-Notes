import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionanswericon',
  templateUrl: './questionanswericon.component.html',
  styleUrls: ['./questionanswericon.component.scss']
})
export class QuestionanswericonComponent implements OnInit {

  constructor() { }
  @Input() question:any;

  ngOnInit() {
    console.log(this.question);
    
  }

}
