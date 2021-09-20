import { Injectable } from '@angular/core';
let token = JSON.parse(localStorage.getItem('token') || '{}');

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  isAdmin(){
    return true;
  }

  getToken(){
    return token;
  }

}
