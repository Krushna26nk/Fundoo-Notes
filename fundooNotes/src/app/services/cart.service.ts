import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseUrl = environment.baseUrl;
  httpOptions = {
    headers : new HttpHeaders({
    "Content-Type":'application/json',
    "Authorization":localStorage.getItem('token')
  })
  }

  constructor(private http:HttpClient) { }

  getServices(){
    var url = 'user/service'
    return this.http.get(this.baseUrl+url);
  }

  onAddToCart(data){
    var url = 'productcarts/addToCart'
    return this.http.post(this.baseUrl+url,data);
  }

  getMyCart(){
    var url = "productcarts/myCart";
    return this.http.get(this.baseUrl+url,this.httpOptions);
  }

  placeOrder(data){
    var url = 'productcarts/placeOrder';
    return this.http.post(this.baseUrl+url,data,this.httpOptions);
  }

}
