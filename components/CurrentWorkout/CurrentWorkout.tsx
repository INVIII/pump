// src/components/CurrentWorkout/CurrentWorkout.tsx

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Activity, Play, Pause } from 'lucide-react';
import { formatTime } from '@/utils/formatters';
import { workoutData } from '@/data/workoutData';

interface CurrentWorkoutProps {
  activeDay: string;
  timer: number;
  exerciseTimer: number;
  isTimerRunning: boolean;
  currentExerciseIndex: number;
  setIsTimerRunning: (isRunning: boolean) => void;
  setCurrentExerciseIndex: (index: number) => void;
  resetTimers: () => void;
}

const CurrentWorkout: React.FC<CurrentWorkoutProps> = ({
  activeDay,
  timer,
  exerciseTimer,
  isTimerRunning,
  currentExerciseIndex,
  setIsTimerRunning,
  setCurrentExerciseIndex,
  resetTimers,
}) => {
  const currentDay = workoutData.days.find(day => day.id === activeDay);
  const currentExercise = currentDay?.mainWorkout[currentExerciseIndex];
  const nextExercise = currentDay?.mainWorkout[currentExerciseIndex + 1];

  const progressToNextExercise = () => {
    if (currentDay && currentExerciseIndex < currentDay.mainWorkout.length - 1) {
      setCurrentExerciseIndex(prev => prev + 1);
      resetTimers(); // Reset timers when progressing to next exercise
    } else {
      setIsTimerRunning(false);
      setCurrentExerciseIndex(0);
      resetTimers(); // Reset timers when workout is complete
    }
  };

  return (
    <Card className="lg:col-span-2 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-200">
      <CardHeader className="border-b">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold flex items-center gap-2">
            <Activity className="w-6 h-6 text-blue-500" />
            Current Workout
          </CardTitle>
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="text-lg">
              Exercise: {formatTime(exerciseTimer)}
            </Badge>
            <Badge variant="secondary" className="text-lg">
              Total: {formatTime(timer)}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* Current Exercise Display */}
          {currentExercise && (
            <div className="space-y-4">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">
                  {currentExercise.exercise}
                </h3>
                <p className="text-blue-600">{currentExercise.reps}</p>
                <Progress
                  value={(exerciseTimer / 60) * 100}
                  className="mt-4 h-2"
                />
              </div>

              {/* Next Exercise Preview */}
              {nextExercise && (
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-600 mb-1">Next Up: {nextExercise.exercise}</p>

                </div>
              )}
            </div>
          )}

          {/* Controls */}
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              variant={isTimerRunning ? "destructive" : "default"}
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className="w-40"
            >
              {isTimerRunning ? (
                <>
                  <Pause className="mr-2 h-5 w-5" /> Pause
                </>
              ) : (
                <>
                  <Play className="mr-2 h-5 w-5" /> Start
                </>
              )}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={progressToNextExercise}
              className="w-40"
            >
              Skip Exercise
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrentWorkout;