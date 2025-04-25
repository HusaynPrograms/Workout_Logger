// workout.service.ts
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Workout } from '../models/workout';
import { LocalNotifications } from '@capacitor/local-notifications';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private workouts: Workout[] = [];
  
  constructor(private storage: Storage) {
    this.init();
  }
  
  private async init() {
    // create storage and load saved workouts
    await this.storage.create();
    this.workouts = (await this.storage.get('workouts')) || [];
  }
  
  getWorkouts(): Workout[] {
    return this.workouts;
  }
  
  async addWorkout(workout: Workout) {
    // save workout to array and storage
    this.workouts.push(workout);
    await this.storage.set('workouts', this.workouts);
    
    // set reminder notification 5min before workout
    const at = new Date(`${workout.date}T${workout.time}`);
    at.setMinutes(at.getMinutes() - 5);
    await LocalNotifications.schedule({
      notifications: [{
        title: 'Workout Reminder',
        body: `Upcoming: ${workout.type} at ${workout.time}`,
        id: Date.now(),
        schedule: { at }
      }]
    });
  }
}