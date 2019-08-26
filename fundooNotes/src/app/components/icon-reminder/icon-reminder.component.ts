import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/modal/note';
import { UrlService } from 'src/app/services/url.service';
import { RefreshService } from 'src/app/services/refresh.service';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-icon-reminder',
  templateUrl: './icon-reminder.component.html',
  styleUrls: ['./icon-reminder.component.scss']
})
export class IconReminderComponent implements OnInit {

  constructor(private urlService:UrlService,private refreshService:RefreshService,private noteService:NoteService) { }

  note : Note = new Note();
  currentDate = new Date();


  ngOnInit() {
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
  console.log(this.currentDate.setHours(14));
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

}
