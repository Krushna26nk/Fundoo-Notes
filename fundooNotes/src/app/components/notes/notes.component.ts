import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Note } from 'src/app/modal/note';
import { UserService } from 'src/app/services/user.service';
import { NoteService } from 'src/app/services/note.service';
import { MatDialog } from '@angular/material';
import { EditnotesComponent } from '../editnotes/editnotes.component';

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
  
  /**
   * color input string array for color pallete
   */
  colors : string[] = [
    '#659DBD','#FC4445','#3FEEE6','#B1A296','#4E4E50','#AFD275','#EE4C7C','#D79922'
  ]

  public isSelected : string;

 
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


  /**
   * @description onClose() method for displayinig the opening note animation  on click event
   */

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

  // toggleCard(){
  //   this.showIcons = !this.showIcons;
  // }

  // openCardToggle(){
  //   this.toggleCard();
  //   if(this.showIcons){
  //     return 'none';
  //   }
  //   else{

  //   }
  // }



/**
 * 
 * @param color the color param get by the selected through the color palette.
 * @description to fetch the user selected colo by USING EB+VENT EMMITER...
 */

            changeColor(color){
            this.color = color;
            this.event.emit(this.color);
            }



  /**
   * @description onsubmit() method to add the particular note into the databses by checking is it empty or not.
   */


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




/**
 * @description to fetch all the note by using http services
 *   services : userservice and note service
 */



  getNote(){

    this.userService.getNote(this.token)
    console.log(this.token);
    // var sampledata = this.noteService.dataArray;
    
    // this.cardArray =sampledata;
    console.log("array fetch in note component",this.cardArray);
  }




/**
 * @description trashNOte () method for the temparary deleting the notes and store it into the trash
 * @param noteid id of the particular norte stored while adding into the database.
 * @param userId id of the particular user which note is belongs to.
 */

trashNote(userId,noteid){
  this.userService.trashNote(userId,noteid);
  console.log(noteid);
  console.log(userId);
  
}
  
}
