import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { UrlService } from 'src/app/services/url.service';
import {environment} from '../../../environments/environment';
import { Note } from 'src/app/modal/note';
import { RefreshService } from 'src/app/services/refresh.service';
@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  constructor(private urlService:UrlService,private noteService:NoteService,private refreshServie:RefreshService) { }

  note: Note = new Note();

  baseUrl = environment.baseUrl;

  token = localStorage.getItem('token');

  trashList :any[] =[];
  msg:any

  ngOnInit() {
    this.refreshServie.currentMessage.subscribe(res =>{
      this.msg = res;
      console.log('k;lk');
    })
    this.getTrashed();
  }

  getTrashed(){
    var url='notes/getTrashNotesList';
    this.trashList = [];
    this.noteService.getTrashed(this.baseUrl+url).subscribe((response:any) =>{
      console.log(response);
      console.log(response.data.data);
      var trash = response.data.data;
      trash.forEach(element =>{
        this.trashList.push(element);
      })
      this.refreshServie.changeMessage('df');
    });;
  }

  deleteForever(items){
    this.note.noteIdList = items.id;
    console.log(this.note.noteIdList);
    
    var data={
      "title":items.title,
      "description":items.description,
      "id":this.note.noteIdList,
      "isDeleted":items.isDeleted,
      "isPinned":items.isPinned
    }
    var url ='notes/deleteForeverNotes'
    this.noteService.deleteForever(url,data).subscribe((resposne:any)=>{
      console.log(resposne);
      this.refreshServie.changeMessage('kk');
    });
  }
  restore(items){
    this.note.noteIdList = items.id;
  }

}
