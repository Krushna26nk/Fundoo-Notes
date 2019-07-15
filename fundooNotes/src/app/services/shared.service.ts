import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  parentData : string;
  inputvalueArray : string;
  labelName : any;
  toggle : boolean
  constructor() { }


  getHandle(handle){
    this.toggle = handle
    console.log(this.toggle);    
  }

}
