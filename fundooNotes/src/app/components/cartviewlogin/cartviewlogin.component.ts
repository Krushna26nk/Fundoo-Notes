import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogcomponentComponent } from '../dialogcomponent/dialogcomponent.component';
import { CartService } from 'src/app/services/cart.service';
import { RefreshService } from 'src/app/services/refresh.service';

@Component({
  selector: 'app-cartviewlogin',
  templateUrl: './cartviewlogin.component.html',
  styleUrls: ['./cartviewlogin.component.scss']
})
export class CartviewloginComponent implements OnInit {

  constructor( private dialog : MatDialog ,private refreshService:RefreshService, private cartService:CartService) { }

  products : any[] = []
  isSelected: boolean = false;
  resData : any
  ngOnInit() {
    this.getUserService();
  }

  getUserService(){
    this.cartService.getServices().subscribe((res:any) =>{
      console.log(res.data.data);
      this.resData = res.data.data;
      this.resData.forEach(element => {
        this.products.push(element);
      });

    })
    this.refreshService.changeMessage(this.products);
  }

  onSelectService(item){
    this.dialog.open(DialogcomponentComponent,{
      panelClass:'myapp-no-padding-dialog',
      data :{
        "data":item,
      }
    });
  }

 

}
