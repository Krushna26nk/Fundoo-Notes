import { Component, OnInit } from '@angular/core';
import { UrlService } from 'src/app/services/url.service';
import { User } from 'src/app/modal/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RefreshService } from 'src/app/services/refresh.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private urlService:UrlService , private refreshService:RefreshService) { }


  resetEmail:String;
  allData : any[] =[];
  productId : any;
  loginData : User = new User();

  loginForm = new FormGroup({
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  });

  ngOnInit() {
    this.productId = localStorage.getItem('productId');
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
    this.loginData=this.loginForm.value
    console.log('model data',this.loginData);
    this.urlService.onLogin(this.loginData);
    console.log(this.loginForm.value);
  }

}
