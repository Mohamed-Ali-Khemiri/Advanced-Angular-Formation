import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from './post-service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  readonly apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.apiUrl);
  }

  postPosts(object: any): Observable<Posts> {
    return this.http.post<Posts>(`${this.apiUrl}`, object);
  }
}
