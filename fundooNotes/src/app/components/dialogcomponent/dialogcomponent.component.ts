import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { RefreshService } from 'src/app/services/refresh.service';
import {Router} from '@angular/router';
import { Productcart } from 'src/app/modal/productcart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-dialogcomponent',
  templateUrl: './dialogcomponent.component.html',
  styleUrls: ['./dialogcomponent.component.scss']
})
export class DialogcomponentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data:any,
              private dialog:MatDialog,
              private dialogRef:MatDialogRef<DialogcomponentComponent>,
              private refreshService :RefreshService,
              private router:Router , private cartService:CartService ) { }

  isSelected : boolean = false;
  selectServiceData :any;
  allData :any;

  cart : Productcart = new Productcart();

  ngOnInit() {
    this.selectServiceData = this.data.data;
    this.allData = this.data.data;
    localStorage.setItem('productId',this.allData.id);
    console.log(this.data);
    console.log(this.allData)
  }

  onRemove(){
    this.dialogRef.close();
  }
  onCheckOut(){
    console.log('checkout data',this.allData.price);
    this.cart.id = this.allData.id;
    var data ={
      "productId":this.cart.id
    }
    this.cartService.onAddToCart(data).subscribe((res:any) =>{
      console.log(res);
    })

    this.dialog.closeAll();
    this.router.navigateByUrl('registerWithService');
  }


}
