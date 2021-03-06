import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { UrlService } from 'src/app/services/user.service';
import {environment} from '../../../environments/environment';
import { Note } from 'src/app/modal/note';
@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  constructor(private urlService:UrlService,private noteService:NoteService) { }

  note: Note = new Note();

  baseUrl = environment.baseUrl;

  token = localStorage.getItem('token');

  trashedNoteList = this.noteService.trashList;

  ngOnInit() {
    this.getTrashed();
  }

  getTrashed(){
    var url='notes/getTrashNotesList'
    this.noteService.getTrashed(this.baseUrl+url);
  }

  deleteForever(items){
    this.note.noteIdList = items.id;
    var data={
      "isDeleted":true
    }
  }
  restore(items){
    this.note.noteIdList = items.id;
  }

}
