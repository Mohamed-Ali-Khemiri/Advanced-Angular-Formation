import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(object : any) {
    return this.http.post('http://localhost:4200/users/authenticate', object);
  }

  signin(object : any) {
    return this.http.post('http://localhost:4200/users/register', object);
  }

}
