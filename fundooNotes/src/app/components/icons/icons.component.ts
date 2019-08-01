import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Note } from 'src/app/modal/note';
import { Notelabel } from 'src/app/modal/notelabel';
import { NoteService } from 'src/app/services/note.service';
import { MatDialog } from '@angular/material';
import {environment} from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  baseurl = environment.baseUrl;

  constructor(private noteService:NoteService,private dialog:MatDialog,private http:HttpClient) { }

  note: Note = new Note;
  noteLabel :Notelabel = new Notelabel();
  token =localStorage.getItem('token');
  open=false;
  showIcons = false;
  showIcon = true;
  newColor:any;
  noteId:any;
  title:string;
  description:string;
  isDeleted:boolean=false;
  isArchived:boolean=false;
  reminder : string;
  collaborators : any[] = [];
  colour : any;
 
  todayReminder = new Date();
  tomorrowReminder = new Date();
  weeklyReminder = new Date();

  userProfile = environment.baseUrl1+localStorage.getItem('profilePic');
  fullName = localStorage.getItem('firstName') +' '+ localStorage.getItem('lastName');
  userEmail = localStorage.getItem('email');

  searchArray : any[] =[];
  searchinput = new FormControl();

  @Input() color:string
  @Output() event = new EventEmitter();
  @Output() colorevent = new EventEmitter();
  @Output() reminderevent = new EventEmitter();
  @Output() archiveEvent = new EventEmitter();

  cardArray = this.noteService.dataArray;
  sampleCardArray = this.noteService.noteArray;
  labelArrayList : any[] = this.noteService.labelArray
  labelDetails : any[] = this.noteService.labelDetails;

  inputhandle : boolean;

  days= ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  currentDate = new Date();

  // token = localStorage.getItem('token');
  colors : string[] = [
    '#659DBD','#F78888','#90CCF4','#B1A296','#808080','#AFD275','#FFC0CB','#D79922'
  ]


  ngOnInit() {
  }
  /**
   *  @description reminder function

   */
        setReminderToday(){
          // var date = new Date();
          // var d = this.todayReminder.getDate();
          // date.setDate(d+1);
          var d = this.todayReminder.toDateString()+" 08:00";
          this.reminder = d;
          // console.log(this.reminder);
          this.reminderevent.emit(this.reminder)
        }
        setReminderTomorrow(){
          var date = new Date();
          var d = this.tomorrowReminder.getDate();
          this.tomorrowReminder.setDate(d+1);
          var s = this.tomorrowReminder.setHours(20);
          // console.log(this.tomorrowReminder);
          this.reminderevent.emit(this.tomorrowReminder)
        }
        setReminderWeekly(){
          var d = this.weeklyReminder.getDate();
          this.weeklyReminder.setDate(d+7);
          // console.log(this.weeklyReminder);
          this.reminderevent.emit(this.weeklyReminder)
        }

  /** ---------------------- */


  openCollaborator(template){
    this.dialog.open(template,{
      width:'50vw'
    });
  }



// on color change function  

  changeColor(color){
    this.colour = color;
    // console.log('color',this.colour);
    this.colorevent.emit(this.colour);
  }


// on archive function

  onArchive(){
    this.isArchived = true;
    this.archiveEvent.emit(this.isArchived);
  }



  // on collaborate function 


  onKey(value){
    var url = this.baseurl + 'user/searchUserList';
    var data ={
      "searchWord":value
    }
    this.http.post(url,data,{
      headers:{
        'Authorization':localStorage.getItem('token')
      }
    }).subscribe((data:any) =>{
      console.log(data.data.details);
      this.searchArray = data.data.details;
      
    });
  }

  addCollaborator(items:any,templateReference){
    console.log(items.user);
    console.log(this.searchArray[0]);
    

    let dialogRef = this.dialog.open(templateReference,{
      width:'40vw'
    })
    
  }

  onCollaborate(value){
    console.log(this.searchinput)
    console.log(value);
    console.log(value.id);
    var id = value.id
    console.log('value',this.searchinput.value);
    var data : string[] = this.searchinput.value
    
    var url ='/notes/'+id+'/AddcollaboratorsNotes'
    this.http.post(this.baseurl+url,this.searchinput.value,{
      headers :{
        'Authorization':localStorage.getItem('token')
      }
    }).subscribe((response:any)=>{
      console.log(response);
    })
    this.dialog.closeAll();
  }

  onRemoveCollaborator(collabId,note){
    console.log(collabId);
    console.log(note.id);
    var noteId = note.id;
    this.noteService.onRemoveCollaborator(collabId,noteId);
    
  }

}
