// workouts.page.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { WorkoutService } from 'src/app/services/workout.service';
import { Workout } from 'src/app/models/workout';

@Component({
  selector: 'app-workouts',
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel],
  templateUrl: './workouts.page.html',
  styleUrls: ['./workouts.page.scss']
})
export class WorkoutsPage implements OnInit {
  workouts: Workout[] = [];
  
  constructor(private workoutService: WorkoutService) {}
  
  ngOnInit() {
    // load saved workouts when page opens
    this.workouts = this.workoutService.getWorkouts();
  }
}