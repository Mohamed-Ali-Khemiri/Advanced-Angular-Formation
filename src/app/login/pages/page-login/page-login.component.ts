import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginFacade } from '../../login.facade';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {

  constructor(private facadeLogin: LoginFacade) { }
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })
  ngOnInit(): void {
  }

  onLogin() {
    this.facadeLogin.postLogin(this.loginForm.value);
  }

}
