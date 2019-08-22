import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http:HttpClient,private router:Router,private snackbar:MatSnackBar) { }

  postData(url,data){
    return this.http.post(url,data)
  }

  post(url,data){
    return this.http.post(url,data);
  }

}
