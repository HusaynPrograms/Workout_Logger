// add-workout.page.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonInput, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { WorkoutService } from 'src/app/services/workout.service';
import { Workout } from 'src/app/models/workout';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-add-workout',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonInput, 
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent
  ],
  templateUrl: './add-workout.page.html',
  styleUrls: ['./add-workout.page.scss']
})
export class AddWorkoutPage implements OnInit {
  workout: Workout = { 
    type: '', 
    date: '', 
    time: '', 
    duration: 0, 
    goal: '' 
  };
  info: any = null;
  
  constructor(
    private workoutService: WorkoutService, 
    private router: Router,
    private infoService: InfoService
  ) {}
  
  ngOnInit() {
    // get internet data when page loads
    this.infoService.getRandomInfo().subscribe(data => {
      this.info = data;
      console.log('got info:', data);
    });
  }
  
  // save the workout and go back to list
  async save() {
    await this.workoutService.addWorkout(this.workout);
    this.router.navigateByUrl('/workouts');
  }
}