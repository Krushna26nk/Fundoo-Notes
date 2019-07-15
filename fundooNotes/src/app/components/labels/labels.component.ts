import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsComponent implements OnInit {

  @Input() childMessage :string;
  @Input() labelname :string;


  constructor(private noteService:NoteService,private urlService:UrlService) { }


  noteBylabels = this.noteService.notesbyLabel;

  ngOnInit() {
    console.log('labelname read',this.noteBylabels);
    
    // this.getNoteByLabels()
  }

  // getNoteByLabels(){
  //   this.urlService.getNoteListByLabel();
  // }

}
