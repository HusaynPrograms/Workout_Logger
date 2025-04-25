// weather.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) {}
  
  // Get weather data from a public API
  getWeather(): Observable<any> {
    // Using a public mock API for weather data
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }
}