import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-remainder',
  templateUrl: './remainder.component.html',
  styleUrls: ['./remainder.component.scss']
})
export class RemainderComponent implements OnInit {

  constructor(private noteService:NoteService,private sharedService:SharedService) { }

  inputhandle : any;

  reminderList = this.noteService.reminderList;
  
  ngOnInit() {
    this.getReminderList();
    this.getHandle();
  }

  /**
   * @description method to get the reminded notes list.
   */
  getReminderList(){
    this.noteService.getReminderList();
  }

  /**
   * @description handle method to get the event data for list and grid view
   */

  getHandle(){
    this.sharedService.change.subscribe(data =>{
      console.log('handle in reminder notes',data);
      this.inputhandle = data;
    })
  }

}
