import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  secondFormGroup = new FormGroup({
    secondCtrl : new FormControl()
  })


  firstFormGroup = new FormGroup({
    firstCtrl : new FormControl()
  })

  constructor() { }

  ngOnInit() {
  }

}
