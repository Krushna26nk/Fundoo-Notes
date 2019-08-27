import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  baseurl = environment.baseUrl;

  constructor() { }

  ngOnInit() {
  }

  getNotes(){
    
  }

}
