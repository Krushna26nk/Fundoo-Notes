import { Component, OnInit } from '@angular/core';
import { RefreshService } from 'src/app/services/refresh.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-with-service',
  templateUrl: './register-with-service.component.html',
  styleUrls: ['./register-with-service.component.scss']
})
export class RegisterWithServiceComponent implements OnInit {

  constructor(private refreshService :RefreshService) { }

  allData : any;

  registerForm = new FormGroup({
    firstName : new FormControl('',Validators.required),
    lastName : new FormControl('',Validators.required),
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
    confirmPassword : new FormControl('',Validators.required)
  })

  ngOnInit() {
    this.refreshService.currentMessage.subscribe((res:any)=>{
      console.log(res);
      this.allData =res;
    })
  }

  onRegister(data){
    console.log(data);
  }

}
