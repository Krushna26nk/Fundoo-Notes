import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-remainder',
  templateUrl: './remainder.component.html',
  styleUrls: ['./remainder.component.scss']
})
export class RemainderComponent implements OnInit {

  constructor(private noteService:NoteService) { }

  reminderList = this.noteService.reminderList;
  
  ngOnInit() {
    this.getReminderList()
  }

  getReminderList(){
    this.noteService.getReminderList();
  }

}
