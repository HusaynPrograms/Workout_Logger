import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DataService} from './Services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  students: any[] = []; // Array for student data
  weather: any[] = []; // Array for weather data
  temperature:any = ""; // Variable for temperature data

  // Uses DataService to fetch data
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    //Takes student data from DataService
    this.dataService.getStudentData().subscribe(
      (data) => {
        this.students = data.students; // Stores Data
      },
      (error) => {
        console.error("Error fetching student data", error); // Handles errors
      }
    );

    // Get weather data from DataService
    this.dataService.getWeatherData().subscribe (
      (data) => {
        this.weather = data.weather; // Store Weather Data
        this.temperature = data.main; // Store temperature data
      },
      (error) => {
        console.error("Error fetching weather data", error);
      }
    );

  }
}
