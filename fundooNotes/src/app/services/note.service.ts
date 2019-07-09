import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http:Http) { }

  dataArray:any = [];

  postNote(url,data,token){
    this.http.post(url,data,token).subscribe(data =>{
      console.log('Note Add Response',data);
       
    })
  }

  getNote(url,data1){
    var sample=this.http.get(url,data1).subscribe(data =>{
      var fetchData=data.json().data.data

      fetchData.forEach(element => {
        // console.log(element);
        this.dataArray.push(element);
      });

      // this.dataArray.push(fetchData);
      console.log(fetchData);
      // console.log("note service array",this.dataArray);
      
      
    });
    console.log(sample);
    
  }

  trashNote(url,userid,noteid){
    this.http.post(url,userid,noteid).subscribe(data =>{
      console.log(data);
      
    })
  }

}
