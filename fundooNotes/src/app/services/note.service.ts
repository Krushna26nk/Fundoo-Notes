import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http:HttpClient) { }

  dataArray     :any = [];
  noteArray     :any = [];
  trashList     :any = [];
  archivedList  :any = [];


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

 
  getArchievedlist(url){
    this.http.get(url,this.httpOptions).subscribe((response:any)=>{
      console.log(response);
      var list=response.data.data;
      list.forEach(element=>{
        this.archivedList.push(element);
      })
    })
  }

}
