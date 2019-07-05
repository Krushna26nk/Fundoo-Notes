import { Component, OnInit } from '@angular/core';
import { CloseScrollStrategy } from '@angular/cdk/overlay';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor() { }
  onNotification(){
    console.log('click on notification');
  }
  onCollaborator(){
    console.log('click on collaborator');
    
  }
  onColor(){
    console.log('click on color');
  }
  onImage(){
    console.log('click on image');
  }
  onArchive(){
    console.log('click on archive');
  }

  ngOnInit() {
  }

}
