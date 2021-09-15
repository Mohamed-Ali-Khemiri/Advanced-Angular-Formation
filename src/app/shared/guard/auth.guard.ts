import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor( private auth : AuthService, private route: Router) {}
  canLoad( ): boolean {
    const isAuth = this.auth.isAdmin();
    if ( !isAuth ) {this.route.navigate(['home'])}
    return isAuth;
  }

}
