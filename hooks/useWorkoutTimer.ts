

import { useState, useEffect } from 'react';

export const useWorkoutTimer = () => {
  const [time, setTime] = useState(0);
  const [exerciseTime, setExerciseTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [caloriesBurned, setCaloriesBurned] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        setTime(prev => prev + 1);
        setExerciseTime(prev => prev + 1);
        setCaloriesBurned(prev => prev + 0.15);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const resetTimers = () => {
    setTime(0);
    setExerciseTime(0);
    setCaloriesBurned(0);
  };

  return {
    time,
    exerciseTime,
    isRunning,
    caloriesBurned,
    setIsRunning,
    resetTimers,
  };
};