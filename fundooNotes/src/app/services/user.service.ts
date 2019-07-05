import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private dataService:DataService) { }

  baseurl = environment.baseUrl;

  onLogin(data){
    var url='user/login';
    this.dataService.postData(this.baseurl+url,data);
  }

  onRegistration(data){
    var url='user/';
    this.dataService.postData(this.baseurl+url,data);
  }
}
