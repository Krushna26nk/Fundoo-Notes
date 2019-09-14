import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(){
    console.log('auth service called.')
    return !!localStorage.getItem('token');
  }
}
