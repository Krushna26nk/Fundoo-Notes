import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modal/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

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
    
  }

}
