import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modal/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private userService :UserService, private router:Router,private snackbar : MatSnackBar) { }

  userData: User = new User;

  dataForm = new  FormGroup({
    firstName : new FormControl('',Validators.required),
    lastName  : new FormControl('',Validators.required),
    email : new FormControl('',Validators.required),
    service: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    confirmPassword : new FormControl('',Validators.required)
  })

  ngOnInit() {
  }

  onRegister(){
    this.userData = this.dataForm.value;
    console.log(this.userData);
    
    if(this.dataForm.controls.password.value != this.dataForm.controls.confirmPassword.value) throw 'Password and confirm password must be same.'
    else{
    this.userService.onRegistration(this.userData);
    }
  }

}
