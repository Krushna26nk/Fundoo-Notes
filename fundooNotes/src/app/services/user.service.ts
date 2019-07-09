import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import {environment} from '../../environments/environment';
import { NoteService } from './note.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private dataService:DataService, private noteService:NoteService) { }

  baseurl = environment.baseUrl;
  prevData : string[] = [];

  onLogin(data){
    var url='user/login';
    this.dataService.postData(this.baseurl+url,data);
  }

  onRegistration(data){
    var url='user/userSignUp';
    this.dataService.post(this.baseurl+url,data);
  }

  /**
   * 
   * @param data data sent from the note card component.
   * @param token token saved during the login of user.
   * @description to add token into the database
   */

  addNote(data,token){
    var url='notes/addNotes';
    this.noteService.postNote(`${this.baseurl+url}`,data,{
      params:{
        'access_token':token
      }});
  }

  getNote(token){
    var url='notes/getNotesList';
    this.noteService.getNote(`${this.baseurl+url}`,{
      params:{
        'access_token':token
      }
    });
  }


  trashNote(userId,noteid){
    var url='notes/trashNotes';
    this.noteService.trashNote(this.baseurl+url,userId,noteid);
  }


}
