import { Component, OnInit } from '@angular/core';
import { RefreshService } from 'src/app/services/refresh.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { UrlService } from 'src/app/services/url.service';
import { MatSnackBar } from '@angular/material';
import { User } from 'src/app/modal/user';

@Component({
  selector: 'app-register-with-service',
  templateUrl: './register-with-service.component.html',
  styleUrls: ['./register-with-service.component.scss']
})
export class RegisterWithServiceComponent implements OnInit {

  constructor(private refreshService :RefreshService , private router:Router,
              private urlService:UrlService,private snackbar:MatSnackBar) { }

  allData : any[] =[];
  selectedService : boolean = false;
  isData : boolean = false;
  cartId : any;

  productId : any;
  registerModal : User = new User();  
  
    firstName = new FormControl('',Validators.required);
    lastName = new FormControl('',Validators.required);
    password = new FormControl('',[Validators.required,Validators.minLength(6)]);
    confirmPassword = new FormControl('',Validators.required);
    email = new FormControl('',[Validators.required,Validators.email]);


  ngOnInit() {
    this.productId = localStorage.getItem('productId');
    console.log('product id',this.productId);

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
    if(localStorage.getItem('cartId') === null){
      return false;
    }
    else{
      this.cartId = localStorage.getItem('cartId');
    }
  }

  onRegister(){
  
    this.registerModal.firstName = this.firstName.value;
    this.registerModal.lastName = this.lastName.value;
    this.registerModal.email = this.email.value;
    this.registerModal.password = this.password.value;
    this.registerModal.cartId = this.cartId;
    var data ={
      "firstName":this.registerModal.firstName,
      "lastName":this.registerModal.lastName,
      "email":this.registerModal.email,
      "password":this.registerModal.password,
      "cartId":this.registerModal.cartId
    }
    console.log(data);
    this.urlService.onRegistration(data).subscribe(
      data =>{
      console.log('response data',data);
      
      this.snackbar.open('Successfull','',{duration: 2000});
      this.router.navigateByUrl('login');
    },
    error => {
      this.snackbar.open('unsuccessfull attemp','End Now',{duration:2000});
      console.log('Error in unsuccesfull attemp',error);
    });;
  }

  route(){
    this.router.navigateByUrl('login');
  }

}
