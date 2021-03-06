import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import {environment} from '../../environments/environment';
import { NoteService } from './note.service';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private dataService:DataService,private sharedService:SharedService, private noteService:NoteService) { }

  baseurl = environment.baseUrl;
  baseurl1 = environment.baseUrl1;
  labelname :string;

  prevData : string[] = [];


// login api url

            onLogin(data){
                var url='user/login';
                return this.dataService.postData(this.baseurl+url,data);
            }

// registration api url

            onRegistration(data){
                var url='user/userSignUp';
                return this.dataService.post(this.baseurl+url,data);
            }

// adding note api url

            addNote(data,token){
              const url='notes/addNotes';
              return this.noteService.postNote(`${this.baseurl+url}`,data,{
                params:{
                  'access_token':token
                }});
            }

// getting all note api url

            getNote(token){
              var url='notes/getNotesList';
              return this.noteService.getNote(`${this.baseurl+url}`,{
                params:{
                  'access_token':token
                }
              });
            }

// deleting the notes api url

            trashNote(data){
              var url='notes/trashNotes';
              this.noteService.trashNote(this.baseurl+url,data);
            }


// changing the note color api url.

            updateColor(data){
              var url ='notes/changesColorNotes'
              return this.noteService.updateColor(this.baseurl+url,data);
            }

// update note url

            updateNote(data){
              var url = 'notes/updateNotes'
              return this.noteService.updateNote(this.baseurl+url,data);
            }

// archive note url api

            archiveNotes(data){
              var url='notes/archiveNotes'
              return this.noteService.archiveNotes(this.baseurl+url,data);
            }

            postLabel(){

            }

            uploadProfile(data){
              var url='user/uploadProfileImage'
             return this.noteService.postData(this.baseurl+url,data);
            }

            getNoteListByLabel(item){
              this.labelname = item;
              console.log('url srvice')
              var url ='notes/getNotesListByLabel/'+item+''
              return this.noteService.getNotesListbylabels(url);
            }

            postRemoveLabel(labelId,noteId){
              var url = "notes/"+noteId+"/addLabelToNotes/"+labelId+"/remove"
              var data ={
                "noteId":noteId,
                "labelId":labelId
              }
              this.noteService.postRemovelabel(url,data);
            }

            postReminder(data){
              var url ='notes/addUpdateReminderNotes'
              return this.noteService.postReminder(this.baseurl+url,data);
            }

            postReminderTomorrow(data){
              var url = 'notes/addUpdateReminderNotes'
              var sendData =
              this.noteService.postReminderTomorrow(this.baseurl+url,data);
            }
            postReminderWeekly(data){
              var url ='notes/addUpdateReminderNotes';
              this.noteService.postReminderWeekly(this.baseurl+url);
            }
            deleteReminder(data){
              var url='notes/removeReminderNotes'
              this.noteService.postDeleteReminder(this.baseurl+url,data);
            }
}
