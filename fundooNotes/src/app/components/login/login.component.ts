import { Component, OnInit } from '@angular/core';
import { UrlService } from 'src/app/services/url.service';
import { User } from 'src/app/modal/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RefreshService } from 'src/app/services/refresh.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private urlService:UrlService , private refreshService:RefreshService,private snackbar:MatSnackBar,
              private router:Router) { }


  resetEmail:String;
  allData : any[] =[];
  productId : any;
  cartId    : any;
  loginData : User = new User();

  loginForm = new FormGroup({
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  });

  ngOnInit() {
    this.productId = localStorage.getItem('productId');

    if(localStorage.getItem('cartId')===null){
      return false;
    }
    else{
      this.cartId = localStorage.getItem('cartId');
    }

    this.refreshService.currentMessage.subscribe((res:any) =>{
      console.log(res);
      if(typeof res === "string"){
        console.log(res , typeof(res));        
      }
      else
      {
        this.allData = res;
        console.log('all da',this.allData);
      }
    })
  }
  onLogin(){
    // this.loginData=this.loginForm.value;
    var data={
      "email":this.loginForm.controls.email.value,
      "password":this.loginForm.controls.password.value,
      "cartId":this.cartId
    }
    console.log('model data',data);

    this.urlService.onLogin(data).subscribe((data:any) =>{
  
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

      var res4 = data.imageUrl;
      localStorage.setItem('profilePic',res4)
      console.log(res4);

      var res5 = data.userId;
      localStorage.setItem('userId',res5);
      console.log(res5);
      
      
      

      console.log('login response data .',data);
      this.snackbar.open('Login Successfull','',{duration:2000});
      this.router.navigateByUrl('dashboard');
               
  },
  error =>{
    this.snackbar.open('login error occured','',{duration:2000});
    console.log('error',error);
    
  });;

    console.log(this.loginForm.value);
  }

}
