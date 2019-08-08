import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { UrlService } from 'src/app/services/url.service';
import { RefreshService } from 'src/app/services/refresh.service';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsComponent implements OnInit {

  @Input() childMessage :string;
  @Input() labelname :string;


  constructor(private noteService:NoteService,private urlService:UrlService,private refreshService:RefreshService) { }


  noteBylabels:any[] = [];

  ngOnInit() {
 
    console.log('labelname read',this.noteBylabels);
    //  this.refreshService.changeMessage('kjk');
    this.getLabels();
  }
getLabels(){
  this.noteBylabels =[];
  this.refreshService.currentMessage.subscribe((res:any) =>{
    console.log('label res through observables',res);
      this.noteBylabels=res;
  });
}
  // getNoteByLabels(){
  //   this.urlService.getNoteListByLabel();
  // }

}
