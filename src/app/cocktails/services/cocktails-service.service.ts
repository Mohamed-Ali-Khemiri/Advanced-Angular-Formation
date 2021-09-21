import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailsServiceService {
  readonly apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';


  constructor(private http: HttpClient) { }

  getcocktails(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${query}`);
  }
}
