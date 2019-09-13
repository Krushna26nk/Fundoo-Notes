import { Component, OnInit } from '@angular/core';
import { UrlService } from 'src/app/services/url.service';
import { NoteService } from 'src/app/services/note.service';
import { environment } from 'src/environments/environment';
import { RefreshService } from 'src/app/services/refresh.service';

@Component({
  selector: 'app-archiev',
  templateUrl: './archiev.component.html',
  styleUrls: ['./archiev.component.scss']
})
export class ArchievComponent implements OnInit {

  constructor(private urlservie:UrlService,private noteService:NoteService,private refreshServie:RefreshService) { }

  baseUrl = environment.baseUrl;
  archivedList : any[] = [];
  noteIdList : any =[];
  msg:any

  color:any;
  reminder:any;
  collaborator:any[] = [];

  ngOnInit() {
    this.refreshServie.currentMessage.subscribe(res =>{
      this.msg = res;
    })
    this.getArchivedList();

  }

  getArchivedList(){
    var url='notes/getArchiveNotesList';
    this.archivedList = [];
    this.noteService.getArchievedlist(this.baseUrl+url).subscribe((response:any)=>{
      console.log(response);
      var list=response.data.data;
      list.forEach(element=>{
        this.archivedList.push(element);
      })
    });
  }

  onUnArchive(items){
    this.noteIdList = items.id;
    var data = {
      "noteIdList":[items.id],
      "isArchived":false
    }

    this.urlservie.archiveNotes(data).subscribe(
      (response:any)=>{
        console.log(response);   
      }
    );
    this.refreshServie.changeMessage('kjsf');
  }

  reminderEvent(data){
    console.log(data);
  }
  colorEvent(data){
    console.log(data);
    this.color = data;
  }
  archiveEvent(data){
    console.log(data);
  }
  collab(data){
    console.log(data);
  }
}
