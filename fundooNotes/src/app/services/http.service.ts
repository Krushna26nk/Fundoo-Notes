import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(  private http:HttpClient) { }

  /**
   * @description post methd to fetch HTTP request
   * @param data  data sent from the note service 
   */

    post(data){

    }


  /**
   * @description delete methd to fetch HTTP request
   * @param data  data sent from the note service 
   */

    delete(data){

    }


  /**
   * @description put methd to fetch HTTP request
   * @param data  data sent from the note service 
   */

    put(data){

    }


  /**
   * @description get methd to fetch HTTP request
   * @param data  data sent from the note service 
   */

    get(data){
      
    }
}
