import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http:HttpClient,private router:Router) { }

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
    this.http.post(url,data,token).subscribe(data =>{
      console.log('Note Add Response',data);
       
    })
  }

  getNote(url,data1){
    this.http.get(url,data1).subscribe((response:any) =>{
      var array = response.data.data
      array.forEach(element => {
        if(element.isDeleted == true || element.isArchived == true){
          this.dataArray.push(element)
        }
        else{
        this.noteArray.push(element);

        }
      });
      console.log('note response',array);
      // console.log("note service array",this.dataArray);
      
      
    });    
  }

  trashNote(url,data){
    this.http.post(url,data,this.httpOptions).subscribe(data =>{
      console.log(data);
      
    })
  }

  updateColor(url,data){
        this.http.post(url,data,this.httpOptions).subscribe(data=>{
          console.log('update color response',data);
          
        });    
  }

  updateNote(url,data){
    this.http.post(url,data,this.httpOptions).subscribe(
      (data:any) =>{
        console.log(data);
        
      }
    )
  }


  archiveNotes(url,data){
    this.http.post(url,data,this.httpOptions).subscribe(
      (response:any)=>{
        console.log(response);
        
      }
    )
  }

  getTrashed(url){
    this.http.get(url,this.httpOptions).subscribe((response:any) =>{
      console.log(response);
      console.log(response.data.data);
      var trash = response.data.data;
      trash.forEach(element =>{
        this.trashList.push(element);
      })
      
    });
  }

  deleteForever(url,data){
    // var url='notes/deleteForeverNotes'
    return this.http.post(this.baseurl+url,data,this.httpOptions);
  }

 
  getArchievedlist(url){
    this.http.get(url,this.httpOptions).subscribe((response:any)=>{
      console.log(response);
      var list=response.data.data;
      list.forEach(element=>{
        this.archivedList.push(element);
      })
    })
  }

  postLabel(data){
    var url="noteLabels"
    this.http.post(this.baseurl+url,data).subscribe((response:any)=>{
      console.log('label add response',response);      
    });
  }
  

  getlabels(token){
    var url ='noteLabels/getNoteLabelList'
    this.http.get(`${this.baseurl+url}`,{
      params :{
        'access_token':token
      }
    }).subscribe((data:any) => {
      console.log('label list response',data);
      var labels = data.data.details;
      labels.forEach(element =>{
        this.labelDetails.push(element);
        this.labelArray.push(element);
      })  
    });

    console.log('label aaray',this.labelArray);
    
  }
  
  postData(url,data){
    console.log(data);
    
    this.http.post(url,data,{
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
    this.http.post(this.baseurl+url,data,this.httpOptions).subscribe((data:any) =>{
      console.log('label filter',data);
      var labelFilter = data.data.data
      console.log(labelFilter);
      labelFilter.forEach(element => {
        this.notesbyLabel.push(element);
      });
      
      
    })
  }
  updateLabelValue(labelId,data){
    var url ='/noteLabels/'+labelId+'/updateNoteLabel'
    this.http.post(this.baseurl+url,this.httpOptions,data).subscribe((response:any)=>{
      console.log(response);
    });
  }

  deleteLabel(id){
    var url='noteLabels/'+id+'/deleteNoteLabel'
    this.http.delete(this.baseurl+url,this.httpOptions).subscribe((response:any) =>{
      console.log(response);
    });
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
    this.http.post(url,data,this.httpOptions).subscribe((response:any) =>{
      console.log(response);
      
    });
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
    this.http.get(this.baseurl+url,this.httpOptions).subscribe((data:any) =>{
      console.log(data.data.data);
      var rem = data.data.data
      rem.forEach(element =>{
        this.reminderList.push(element);
      })
      
    });
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
