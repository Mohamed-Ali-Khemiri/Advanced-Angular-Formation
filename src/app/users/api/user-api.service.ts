import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  readonly apiUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  deleteUser(id: number): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, '');
  }

  addUser(user: object): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}`, user);
  }

}
