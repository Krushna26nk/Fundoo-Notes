import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { RefreshService } from 'src/app/services/refresh.service';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private cartService:CartService,private refreshService:RefreshService,private snackbar:MatSnackBar) { }

  myAllCarts : any[] =  [];
  displayedColumns : any[] =['price','validity']
  dataSource = this.myAllCarts;
  value : any = 5;
  checkout: boolean = false;
  isOrderPlaced : boolean = false;

  address :string;

  ngOnInit(){
    this.refreshService.currentMessage.subscribe(res =>{
      this.getMyCart();
      console.log('redsd');
    })
  }

  getMyCart(){
    this.myAllCarts = []
    this.cartService.getMyCart().subscribe((res:any) =>{
      console.log(res.data);
      var mycart = res.data;
      mycart.forEach(element => {
        this.myAllCarts.push(element);
      });
      // this.refreshService.changeMessage('jk');
    })
  }


  onCheckOut(){
    this.valueAction();
    this.checkout = true;
  }

  onPlaceOrder(cart){
    console.log('dfdf',cart)
    if(this.address === null || this.address === undefined){
      this.snackbar.open('Please Enter Delivery Address.','',{duration:1000});
      return false
    }
    else{
      this.valueAction();
      this.checkout = false;
      var data = {
        "cartId":cart.id,
        "address":this.address
      }
      console.log(data);
      this.cartService.placeOrder(data).subscribe((res:any) => {
        console.log(res);
        this.refreshService.changeMessage('jks');
      })
    }
  }


  valueAction(){
    if(this.value === 100){
      return false
    }
    else if(this.value === 50 ){
      this.value = 100;
    }
    else
    this.value = 50;
  }



}
