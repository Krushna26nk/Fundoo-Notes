import { Component, OnInit } from '@angular/core';
import { RefreshService } from 'src/app/services/refresh.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-with-service',
  templateUrl: './register-with-service.component.html',
  styleUrls: ['./register-with-service.component.scss']
})
export class RegisterWithServiceComponent implements OnInit {

  constructor(private refreshService :RefreshService , private router:Router) { }

  allData : any[] =[];
  selectedService : boolean = false;
  isData : boolean = false;

  productId : any;

  registerForm = new FormGroup({
    firstName : new FormControl('',Validators.required),
    lastName : new FormControl('',Validators.required),
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
    confirmPassword : new FormControl('',Validators.required)
  })

  ngOnInit() {
    this.productId = localStorage.getItem('productId');

    this.refreshService.currentMessage.subscribe((res:any)=>{
      console.log(res);
      if(typeof res === "string"){
        console.log(res , typeof(res));        
      }
      else
      {
        this.isData = true;
        this.allData = res;
        console.log('all data in register',this.allData);
      }

      
    })
  }

  onRegister(data){
    console.log(data);
  }

  route(){
    this.router.navigateByUrl('login');
  }

}
