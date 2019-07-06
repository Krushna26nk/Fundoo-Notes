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
    this.http.post(url,data).subscribe((data:any) =>{
  
      var res = data.id;
      console.log('token in login',res);
      localStorage.setItem('token',res);
      
      var res1 = data.firstName;
      console.log(res1);
      localStorage.setItem('firstName',res1);
      
      var res2 = data.lastName;
      console.log(res2);
      localStorage.setItem('lastName',res2);

      var res3 = data.email;
      console.log(res3);
      localStorage.setItem('email',res3);
      

      console.log('login response data .',data);
      this.snackbar.open('Login Successfull','',{duration:2000});
      this.router.navigateByUrl('dashboard');
               
  },
  error =>{
    this.snackbar.open('login error occured','',{duration:2000});
    console.log('error',error);
    
  });
  }
}
