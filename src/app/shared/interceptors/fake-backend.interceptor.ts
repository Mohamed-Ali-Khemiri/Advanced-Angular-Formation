import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, dematerialize, materialize, mergeMap } from 'rxjs/operators';
let users = JSON.parse(localStorage.getItem('users') || '[]');

@Injectable({
  providedIn: 'root'
})


export class FakeBackendInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const { url, method, headers, body } = request;

    // wrap in delayed observable to simulate server api call
    return of(null)
        .pipe(mergeMap(handleRoute))
        .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
        .pipe(delay(500))
        .pipe(dematerialize());

    function handleRoute() {
        switch (true) {
            case url.endsWith('/users/authenticate') && method === 'POST':
                return authenticate();
            case url.endsWith('/users/register') && method === 'POST':
                return register();
            case url.endsWith('/users') && method === 'GET':
                return getUsers();
            case url.match(/\/users\/\d+$/) && method === 'DELETE':
                return deleteUser();
            default:
                // pass through any requests not handled above
                return next.handle(request);
        }
    }

    // route functions

    function authenticate() {
        const { username, password } = body as any;
        const user = users.find((x: any) => x.username === username && x.password === password);
        if (!user) return error('Username or password is incorrect');
        return ok({
            id: user.id,
            username: user.username,
            token: 'fake-jwt-token'
        })
    }

    function register() {
        const user = body as any;
        if (users.find((x: any) => x.username === user.username)) {
            return error('Username "' + user.username + '" is already taken')
        }
        user.id = users.length ? Math.max(...users.map(( x: any) => x.id)) + 1 : 1;
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        return ok();
    }

    function getUsers() {
        if (!isLoggedIn()) return unauthorized();
        return ok(users);
    }

    function deleteUser() {
        if (!isLoggedIn()) return unauthorized();
        users = users.filter((x: any) => x.id !== idFromUrl());
        localStorage.setItem('users', JSON.stringify(users));
        return ok();
    }

    // helper functions

    function ok(body?: any) {
        return of(new HttpResponse({ status: 200, body }))
    }

    function error(message: any) {
        return throwError({ error: { message } });
    }

    function unauthorized() {
        return throwError({ status: 401, error: { message: 'Unauthorised' } });
    }

    function isLoggedIn() {
        return headers.get('Authorization') === 'Bearer fake-jwt-token';
    }

    function idFromUrl() {
        const urlParts = url.split('/');
        return parseInt(urlParts[urlParts.length - 1]);
    }
  }
}
