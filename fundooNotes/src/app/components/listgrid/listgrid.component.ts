import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-listgrid',
  templateUrl: './listgrid.component.html',
  styleUrls: ['./listgrid.component.scss']
})
export class ListgridComponent implements OnInit {

  constructor(private sharedService:SharedService) { }

  handle : boolean = false

  ngOnInit() {
  }
  onToggle(){
    this.handle = !this.handle;
    this.sharedService.getHandle(this.handle);
    
  }

}
