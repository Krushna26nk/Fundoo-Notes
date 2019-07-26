import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { UrlService } from 'src/app/services/url.service';
import { NoteService } from 'src/app/services/note.service';
import { Notelabel } from 'src/app/modal/notelabel';
import { Note } from 'src/app/modal/note';
import { MatDialog } from '@angular/material';
import { EditnotesComponent } from '../editnotes/editnotes.component';
import { SharedService } from 'src/app/services/shared.service';
import { RefreshService } from 'src/app/services/refresh.service';
import {environment} from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { QuestionanswerComponent } from '../questionanswer/questionanswer.component';

@Component({
  selector: 'app-getnotes',
  templateUrl: './getnotes.component.html',
  styleUrls: ['./getnotes.component.scss']
})
export class GetnotesComponent implements OnInit {
  message: string;


  constructor(private http:HttpClient,private urlService:UrlService,private sharedService:SharedService,private noteService:NoteService,private dialog:MatDialog, private refreshService:RefreshService) { }

  baseurl = environment.baseUrl;

  note: Note = new Note;
  noteLabel :Notelabel = new Notelabel();
  token =localStorage.getItem('token');
  open=false;
  showIcons = false;
  showIcon = true;
  newColor:any;
  noteId:any;
  isDeleted:boolean=false;
  isArchived:boolean=false;
  searchArray : any[] =[];

  gettinghandle : boolean = this.sharedService.toggle;
  searchInput :string;
  searchinput = new FormControl();
  abc = this.searchinput.value;

  @Input() color:string
  @Output() event = new EventEmitter();

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
    // this.getNote()
    this.refreshService.currentMessage.subscribe(
      response=>{
        this.message=response
        console.log(response);
        
       this.getNote();
    })
    this.getHandle();
    // this.searchValue();
  }

/**
 * @description to fetch all the note by using http services
 *   services : userservice and note service
 */
getNote(){
  this.urlService.getNote(this.token)
  console.log(this.token);
  console.log('array fetch in note components');
  
  console.log('note array with trashed and archived notes',this.cardArray);
  console.log('without trashed and archived notes',this.sampleCardArray);
             
  this.sharedService.search.subscribe(data =>{
    console.log("get notes....",data);
    this.searchInput = data;  
  })

  // this.cardArray.forEach(element=>{
  //   this.sampleCardArray.push(element);
  //   console.log('sample card array',this.sampleCardArray);
    
  // })
  

  // this.cardArray.forEach(element => {
  //   console.log('adfdas',element);
  //   this.sampleCardArray.push(element);
  // });            
}

getHandle(){
  this.sharedService.change.subscribe(data =>{
    console.log('handle in notes',data);
    this.inputhandle = data;
    
  })
}

/**
 * 
 * @param color color input which change
 */

changeColor(color){
  this.color = color;
  this.event.emit(this.color);
  }


  /**
   * @description archive api call
   * @param items note detail of which we want to archive
   */

onArchive(items:any){
  this.note.noteIdList = items.id;
  var data = {
    "noteIdList":[this.note.noteIdList],
    "isArchived":true
  }
  this.urlService.archiveNotes(data);
}

/**
 * 
 * @param labelId label id which we want to remove from the note
 * @param noteId noteId of which label we want to remove
 */

onRemoveLabel(labelId,noteId){
  console.log('label id',labelId,'note id',noteId);
  this.urlService.postRemoveLabel(labelId,noteId);
}

updateNote(items:any){
  let dialogref = this.dialog.open(EditnotesComponent,{
    height:'189px',
    width:'450px',
    panelClass:'myapp-no-padding-dialog',
    data:{
      title:items.title,
      description:items.description,
      color:items.color,
      id:items.id
    }
  });
  console.log(items);
  dialogref.afterClosed().subscribe(result =>{
    console.log(`dialog close :${result}`);
    
  })
}


trashNote(items:any){
  // this.urlService.trashNote(userId,noteid);
  this.note.noteIdList = items.id;
  var data={
    "noteIdList":[this.note.noteIdList],
    "isDeleted":true
  }
  console.log(this.note.noteIdList);
 // console.log(userId);
  this.urlService.trashNote(data);
}

// to update the color from color palette

updateColor(items,$event){
  this.newColor = $event;
  console.log('color',$event);
  
  this.note.color = this.newColor;
  var data ={
    "color":this.newColor,
    "noteIdList":[items.id],
  }
  console.log('asds',data);
  
  this.urlService.updateColor(data);
  this.refreshService.changeMessage('ghfg');

}
addLabelToNote(label,items){
      var noteId = items.id;
      var labelId = label.id;

      var data ={
        "noteIdList":[noteId],
        "label":label.label
      }
      
      console.log(event);
      console.log(items);

      this.noteService.addNoteToLabel(items,label)

      console.log(noteId);
      console.log(labelId);
      
}

/**
 * Set Reminders
 */

    setReminderToday(item){
      var d = new Date().toDateString();
      // var time = '8.00';
      // var year = d.getFullYear();
      // var total = this.days[d.getDay()] +" "+ this.months[d.getMonth()] +" "+ d.getDate() +" "+year+" "+time;

      var reminder = d + ", 08:00 ";
      this.note.noteIdList = item.id;
      this.note.title = item.title
      this.note.description = item.description;
      this.note.isDeleted = item.isDeleted;
      // this.note.reminder = [total];

      var data = {
        "noteIdList":[this.note.noteIdList],
        "title": this.note.title,
        "description": this.note.description,
        "isDeleted" : this.note.isDeleted,
        "reminder" : [reminder]
      }

      console.log(d);
      console.log(reminder +", PM");
      console.log(item);
      
      this.urlService.postReminder(data);
      
      
    }

    setReminderTomorrow(item){
      var date =this.currentDate.getDate();
      var setDate  = this.currentDate.setDate(date + 1);
      console.log(this.currentDate.setHours(14))
      // currentDate.setMinutes(0);
      console.log(this.currentDate , setDate);

      this.note.noteIdList = item.id;
      this.note.title = item.title
      this.note.description = item.description;
      this.note.isDeleted = item.isDeleted;

      var data = {
        "noteIdList":[this.note.noteIdList],
        "title": this.note.title,
        "description": this.note.description,
        "isDeleted" : this.note.isDeleted,
        "reminder" : [this.currentDate]
      }
      
      this.urlService.postReminderTomorrow(data);
    }

    setReminderWeekly(item){
      var currentDate = new Date();

      currentDate.setDate(currentDate.getDate()+7);

      this.note.noteIdList = item.id;
      this.note.title = item.title
      this.note.description = item.description;
      this.note.isDeleted = item.isDeleted;

      var data = {
        "noteIdList":[this.note.noteIdList],
        "title": this.note.title,
        "description": this.note.description,
        "isDeleted" : this.note.isDeleted,
        "reminder" : [currentDate]
      }
      console.log(currentDate,data); 
      this.noteService.postReminderWeekly(data);

    }

    onRemoveReminder(reminder,note){
      console.log(reminder,note);
      var data = {
        "noteIdList":[note.id],
        "title": note.title,
        "description": note.description,
        "isDeleted" : note.isDeleted,
        "reminder" : [reminder]
      }
      this.urlService.deleteReminder(data);
    }

    // collaborator
    // searching the user list while collaborating 

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


    onQuestionAnswer(colab,template){
      console.log(colab);
      this.dialog.open(QuestionanswerComponent,{
        width:'50vw'
      });
    }

}
