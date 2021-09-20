import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Injectable()
export class UserInterceptor implements HttpInterceptor {

  constructor(public authService : AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const clonedrequest = request.clone({
      headers: request.headers.set(
        'Authorization',
        'Bearer ' + this.authService.getToken())
    })
    return next.handle(clonedrequest);
  }
}

export const userProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: UserInterceptor,
  multi: true
}
