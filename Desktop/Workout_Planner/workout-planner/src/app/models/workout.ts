// workout.ts (model)
export interface Workout {
  type: string;      // workout type
  date: string;      // date format DD/MM/YYYY
  time: string;      // time format HH:mm
  duration: number;  // in minutes
  goal: string;      // workout goal
}