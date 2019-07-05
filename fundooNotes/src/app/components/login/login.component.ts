import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/modal/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService) { }


  resetEmail:String;

  loginData : User = new User();

  loginForm = new FormGroup({
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  });

  ngOnInit() {
  }
  onLogin(){
    this.loginData=this.loginForm.value
    console.log('model data',this.loginData);
    this.userService.onLogin(this.loginData);
    console.log(this.loginForm.value);
  }

}
