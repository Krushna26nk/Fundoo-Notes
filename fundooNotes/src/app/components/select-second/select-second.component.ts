import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { UrlService } from 'src/app/services/url.service';
import { FormGroup } from '@angular/forms';
import { RefreshService } from 'src/app/services/refresh.service';

@Component({
  selector: 'app-select-second',
  templateUrl: './select-second.component.html',
  styleUrls: ['./select-second.component.scss']
})
export class SelectSecondComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
              private urlService: UrlService, private refreshService: RefreshService,
              private dialog: MatDialog
    ) { }

  firstNote: any;
  secondNote: any[] = [];
  bothNote: any;

  title: any;
  description: any;
  color: any;


  ngOnInit() {
    this.bothNote = this.data;
    this.firstNote = this.data[0];
    this.secondNote = this.data[1];
    console.log('notes', this.data);
  }

  onMerge() {
    const data = {
      'title': this.title,
      'description': this.description,
      'color': this.color
    };
    const token = localStorage.getItem('token');
    this.urlService.addNote(data, token).subscribe(res =>{
      console.log(res);
      this.refreshService.changeMessage(res);
    });
    this.dialog.closeAll();
  }

}
