import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { RefreshService } from './refresh.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http:HttpClient,private router:Router, private refreshService:RefreshService) { }

  dataArray     :any = [];
  noteArray     :any = [];
  trashList     :any = [];
  archivedList  :any = [];
  labelArray    :any = [];
  labelDetails  :any = [];
  reminderList  :any = [];

  notesbyLabel : any = [];

  labelName : any;

  baseurl = environment.baseUrl;


  token= localStorage.getItem('token');

 httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    })
  };


  postNote(url,data,token){
    return this.http.post(url,data,token)
  }

  getNote(url,data1){
  return  this.http.get(url,data1);
  // .subscribe((response:any) =>{
  //     var array = response.data.data
  //     array.forEach(element => {
  //       if(element.isDeleted == true || element.isArchived == true){
  //         this.dataArray.push(element)
  //       }
  //       else{
  //       this.noteArray.push(element);

  //       }
  //     });
  //     console.log('note response',array);
      // console.log("note service array",this.dataArray);


    // });
  }

  trashNote(url,data){
    this.http.post(url,data,this.httpOptions).subscribe(data =>{
      console.log(data);
      this.refreshService.changeMessage(data);
    })
  }

  updateColor(url,data){
        return this.http.post(url,data,this.httpOptions)
      }

  updateNote(url,data){
    return this.http.post(url,data,this.httpOptions);
  }


  archiveNotes(url,data){
    return this.http.post(url,data,this.httpOptions)
  }

  getTrashed(url){
    return  this.http.get(url,this.httpOptions)
  }

  deleteForever(url,data){
    // var url='notes/deleteForeverNotes'
    return this.http.post(this.baseurl+url, data,this.httpOptions);
  }


  getArchievedlist(url){
    return this.http.get(url,this.httpOptions);
  }

  postLabel(data){
    var url="noteLabels"
    return this.http.post(this.baseurl+url,data);
  }


  getlabels(token){
    var url ='noteLabels/getNoteLabelList'
    return this.http.get(`${this.baseurl+url}`,{
      params :{
        'access_token':token
      }
    });
  }

  postData(url,data){
    console.log(data);

    return this.http.post(url,data,{
      headers : new HttpHeaders({
        //'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }).subscribe((data:any) =>{
      console.log(data);
      var imageUrl = data.status.imageUrl;
      console.log(imageUrl);
      localStorage.setItem('profilePic',imageUrl)

    })
  }


  addNoteToLabel(note,label){
    var url = "notes/"+note.id+"/addLabelToNotes/"+label.id+"/add"
    var data = {
      "noteIdList":note.id,
      "label":[label.label]
    }
    this.http.post(this.baseurl+url,data,this.httpOptions).subscribe((response:any)=>{
      console.log(response);
    })
  }

  getNotesListbylabels(url){
    var data= {}
    return this.http.post(this.baseurl+url,data,this.httpOptions);
  }
  updateLabelValue(labelId,data){
    var url ='/noteLabels/'+labelId+'/updateNoteLabel'
    return this.http.post(this.baseurl+url,this.httpOptions,data);
  }

  deleteLabel(id){
    var url='noteLabels/'+id+'/deleteNoteLabel'
    return this.http.delete(this.baseurl+url,this.httpOptions);
  }

  postRemovelabel(url,data){
    this.http.post(this.baseurl+url,data,{
      headers : new HttpHeaders({
        // 'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }).subscribe((response:any)=>{
      console.log(response);

    })
  }

  postReminder(url,data){
    return this.http.post(url,data,this.httpOptions);
  }

  postReminderTomorrow(url,data){
    this.http.post(url,data,this.httpOptions).subscribe((response:any) =>{
      console.log(response);

    });
  }

  postReminderWeekly(data){
    var url = 'notes/addUpdateReminderNotes'
    this.http.post(this.baseurl+url,data,this.httpOptions).subscribe((response:any) =>{
      console.log(response);

    });
  }

  getReminderList(){
    var url='notes/getReminderNotesList'
    return this.http.get(this.baseurl+url,this.httpOptions)
  }

  postDeleteReminder(url,data){
    this.http.post(url,data,{
      headers:{
        'Authorization':localStorage.getItem('token')
      }
    }).subscribe((data:any)=>{
      console.log(data);

    })
  }

  onRemoveCollaborator(collabId,noteId){
    var url='notes/'+noteId+'/removeCollaboratorsNotes/'+collabId
    this.http.delete(this.baseurl+url,this.httpOptions).subscribe((data:any)=>{
      console.log(data);

    })
  }

  postQuestion(data,url){
   return  this.http.post(this.baseurl+url,data,this.httpOptions);
  }

  postReply(data,id){
    var url ="questionAndAnswerNotes/reply/"+id
   return this.http.post(this.baseurl+url,data,this.httpOptions);
  }
  postLike(data,id){
    var url = 'questionAndAnswerNotes/like/'+id
    return this.http.post(this.baseurl+url,data,this.httpOptions);
  }



}
