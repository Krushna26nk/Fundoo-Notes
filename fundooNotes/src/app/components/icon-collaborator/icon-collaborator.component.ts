import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-icon-collaborator',
  templateUrl: './icon-collaborator.component.html',
  styleUrls: ['./icon-collaborator.component.scss']
})
export class IconCollaboratorComponent implements OnInit {

  baseurl = environment.baseUrl
  baseurl1 = environment.baseUrl1;

  constructor(private dialog:MatDialog,private http:HttpClient,private noteService:NoteService) { }

  searchArray :any[] = [];
  searchinput = new FormControl();

  fullName = localStorage.getItem('firstName')+' '+localStorage.getItem('lastName');
  userEmail = localStorage.getItem('email');
  userProfile = this.baseurl1 + localStorage.getItem('profilePic');

  ngOnInit() {
  }
  openCollaborator(template){
    this.dialog.open(template,{
      width:'50vw'
    });
  }
  


  onKey(value){
    var url = this.baseurl + 'user/searchUserList';
    var data ={
      "searchWord":value
    }
    this.http.post(url,data,{
      headers:{
        'Authorization':localStorage.getItem('token')
      }
    }).subscribe((data:any) =>{
      console.log(data.data.details);
      this.searchArray = data.data.details;
      
    });
  }

  addCollaborator(items:any,templateReference){
    console.log(items.user);
    console.log(this.searchArray[0]);
    

    let dialogRef = this.dialog.open(templateReference,{
      width:'40vw'
    })
    
  }

  onCollaborate(value){
    console.log(this.searchinput)
    console.log(value);
    console.log(value.id);
    var id = value.id
    console.log('value',this.searchinput.value);
    var data : string[] = this.searchinput.value
    
    var url ='/notes/'+id+'/AddcollaboratorsNotes'
    this.http.post(this.baseurl+url,this.searchinput.value,{
      headers :{
        'Authorization':localStorage.getItem('token')
      }
    }).subscribe((response:any)=>{
      console.log(response);
    })
    this.dialog.closeAll();
  }

  onRemoveCollaborator(collabId,note){
    console.log(collabId);
    console.log(note.id);
    var noteId = note.id;
    this.noteService.onRemoveCollaborator(collabId,noteId);
    
  }
}
