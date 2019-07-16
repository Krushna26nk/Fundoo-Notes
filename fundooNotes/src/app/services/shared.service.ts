import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  parentData : string;
  inputvalueArray : string;
  labelName : any;
  toggle : boolean

  public change: EventEmitter<any> = new EventEmitter();
  constructor() { }


  getHandle(handle){
    this.toggle = handle
    this.change.emit(handle);
    // console.log(this.toggle);    
  }

}
