import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Note } from 'src/app/modal/note';
import { UserService } from 'src/app/services/user.service';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor(private userService:UserService,private noteService:NoteService) { }

  note: Note = new Note;
  token =localStorage.getItem('token');
  open=false;

  cardArray = this.noteService.dataArray;

  colors : [
    {'#659DBD','#FC4445','#3FEEE6','#B1A296','#4E4E50','#AFD275','#EE4C7C','#D79922'}
  ]
 
  card = new FormGroup({
    title : new FormControl(''),
    description : new FormControl('') 
  })

  titleValue =this.card.controls.title;
  descriptionValue =this.card.controls.description;

  ngOnInit() {
    this.getNote();
  }
  getNote(){

    this.userService.getNote(this.token)
    console.log(this.token);
    // var sampledata = this.noteService.dataArray;
    
    // this.cardArray =sampledata;
    console.log("array fetch in note compponent",this.cardArray);
  }

  onSubmit(){
    this.note = this.card.value;
    console.log(this.note);
    
    if(this.titleValue.value == undefined || this.titleValue.value == null){
      return false
    }
    else if( this.descriptionValue.value == undefined || this.descriptionValue.value == null){
      return false
    }
    else{
      this.userService.addNote(this.note,this.token);
    }
  }

  // openDescription(){
  //   if(this.open){
  //     return 'block'
  //   }
  //   else{
  //     return 'none'
  //   }

  // }

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


}
