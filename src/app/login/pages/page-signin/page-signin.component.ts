import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginFacade } from '../../login.facade';

@Component({
  selector: 'app-page-signin',
  templateUrl: './page-signin.component.html',
  styleUrls: ['./page-signin.component.css']
})
export class PageSigninComponent implements OnInit {

  constructor(private facadeLogin: LoginFacade) { }
  signinForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })
  ngOnInit(): void {
  }

  onSignin() {
    this.facadeLogin.postSignin(this.signinForm.value);
  }
}
