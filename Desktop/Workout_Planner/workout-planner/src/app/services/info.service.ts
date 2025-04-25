// info.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  
  constructor(private http: HttpClient) {}
  
  // get data from internet using HTTP
  getRandomInfo(): Observable<any> {
    // this free API gives random data for testing
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }
}