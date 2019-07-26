import { Component, OnInit } from '@angular/core';
import { UrlService } from 'src/app/services/user.service';
import { NoteService } from 'src/app/services/note.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-archiev',
  templateUrl: './archiev.component.html',
  styleUrls: ['./archiev.component.scss']
})
export class ArchievComponent implements OnInit {

  constructor(private urlservie:UrlService,private noteService:NoteService) { }

  baseUrl = environment.baseUrl;
  archivedList = this.noteService.archivedList;
  noteIdList : any =[];
  
  ngOnInit() {
    this.getArchivedList();
  }

  getArchivedList(){
    var url='notes/getArchiveNotesList'
    this.noteService.getArchievedlist(this.baseUrl+url);
  }

  onUnArchive(items){
    this.noteIdList = items.id;
    var data = {
      "noteIdList":[items.id],
      "isArchived":false
    }

    this.urlservie.archiveNotes(data);

  }
}
