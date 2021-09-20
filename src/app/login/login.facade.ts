import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "./services/login.service";


@Injectable({
  providedIn: 'root'
})
export class LoginFacade {

  constructor(private loginApi: LoginService, private route : Router ) { }

  postLogin(body: any) {
    this.loginApi.login(body).subscribe(
      (res : any) => {
        localStorage.setItem('token', JSON.stringify(res.token || 'test'));
        this.route.navigate(['/home']);
        console.log('logged in')},
      (error) => console.log('error login =>>', error)
    );
  }

  postSignin(body: any) {
    this.loginApi.signin(body).subscribe(
      () => console.log('signed in'),
      (error) => console.log('error sign in =>>', error)
    );
  }

}
