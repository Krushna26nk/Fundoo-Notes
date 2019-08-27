import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { SharedService } from 'src/app/services/shared.service';
import { Note } from 'src/app/modal/note';
import { UrlService } from 'src/app/services/user.service';

@Component({
  selector: 'app-remainder',
  templateUrl: './remainder.component.html',
  styleUrls: ['./remainder.component.scss']
})
export class RemainderComponent implements OnInit {

  constructor(private noteService:NoteService,private sharedService:SharedService , private urlService : UrlService) { }

  inputhandle : any;
  note : Note = new Note();
  reminderList :any[] = [];
  newColor:any;

  colors : string[] = [
    '#659DBD','#F78888','#90CCF4','#B1A296','#808080','#AFD275','#FFC0CB','#D79922'
  ]
  
  ngOnInit() {
    this.getReminderList();
    this.getHandle();
  }

  /**
   * @description method to get the reminded notes list.
   */
  getReminderList(){
    this.reminderList= [];
    this.noteService.getReminderList().subscribe((data:any) =>{
      console.log(data.data.data);
      var rem = data.data.data
      rem.forEach(element =>{
        this.reminderList.push(element);
      })
      
    });;
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
  updateColor(items,$event){
    this.newColor = $event;
    console.log('color',$event);
    
    this.note.color = this.newColor;
    var data ={
      "color":this.newColor,
      "noteIdList":[items.id],
    }
    console.log('asds',data);
    
    this.urlService.updateColor(data);
  
  }

}
