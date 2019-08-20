import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getServices(){
    var url = 'user/service'
    return this.http.get(this.baseUrl+url);
  }

  onAddToCart(data){
    var url = 'productcarts/addToCart'
    return this.http.post(this.baseUrl+url,data);
  }

}
