// app.routes.ts
import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { WorkoutsPage } from './pages/workouts/workouts.page';
import { AddWorkoutPage } from './pages/add-workout/add-workout.page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'workouts', component: WorkoutsPage },
  { path: 'add-workout', component: AddWorkoutPage},
];