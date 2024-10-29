export interface WorkoutDay {
    id: string;
    name: string;
    type: string;
    color: string;
    intensity: string;
    duration: string;
    mainWorkout: WorkoutExercise[];
    coreFinisher?: WorkoutExercise[];
  }
  
  export interface WorkoutExercise {
    time: string;
    exercise: string;
    reps: string;
  }