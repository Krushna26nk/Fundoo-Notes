import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Note } from 'src/app/modal/note';
import { UserService } from 'src/app/services/user.service';
import { NoteService } from 'src/app/services/note.service';
import { forEach } from '@angular/router/src/utils/collection';

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
  showIcons = false;
  showIcon = true;

  @Input() color :string;

  @Output() event = new EventEmitter();


  cardArray = this.noteService.dataArray;

  colors : string[] = [
    '#659DBD','#FC4445','#3FEEE6','#B1A296','#4E4E50','#AFD275','#EE4C7C','#D79922'
  ]
 
  card = new FormGroup({
    title : new FormControl(''),
    description : new FormControl('') 
  })

  titleValue =this.card.controls.title;
  descriptionValue =this.card.controls.description;

  value : string;

  ngOnInit() {
    this.getNote();
  }

            onClose(){
              
              if(this.titleValue == undefined || this.titleValue == null || this.descriptionValue == undefined || this.descriptionValue == null){
                this.showIcons = !this.showIcons;
                this.showIcon = !this.showIcon;
              }
              else if(this.color == undefined){
                this.note.color =''
              }
              else{
                this.note.color = this.color;
                this.userService.addNote(this.note,this.token);
              }
            }

  toggleCard(){
    this.showIcons = !this.showIcons;
  }

  openCardToggle(){
    this.toggleCard();
    if(this.showIcons){
      return 'none';
    }
    else{

    }
  }


            changeColor(color){
            this.color = color;
            this.event.emit(this.color);
            }


trashNote(){

  console.log();
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
                
                if(this.titleValue.value == undefined || this.titleValue.value == ''){
                  this.showIcons;
                  this.showIcon = !this.showIcon;
                  return false
                }
                else if( this.descriptionValue.value == undefined || this.descriptionValue.value == ''){
                  this.showIcons;
                  this.showIcon = !this.showIcon;
                  return false
                }
                else if(this.color == undefined){
                  this.note.color = '';
                }
                else{
                  this.note.color = this.color;
                  this.userService.addNote(this.note,this.token);
                }
              }


  


}
