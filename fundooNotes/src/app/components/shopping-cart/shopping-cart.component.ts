import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { RefreshService } from 'src/app/services/refresh.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private cartService:CartService,private refreshService:RefreshService) { }

  myAllCarts : any[] =  [];
  value : any = 100;

  ngOnInit(){
    this.refreshService.currentMessage.subscribe(res =>{
      console.log(res);
      this.getMyCart();      
    })
  }

  getMyCart(){
    this.cartService.getMyCart().subscribe((res:any) =>{
      console.log(res.data);
      var mycart = res.data;
      mycart.forEach(element => {
        this.myAllCarts.push(element);
      });
    })
  }

}
