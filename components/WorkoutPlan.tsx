"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Clock, Dumbbell, Activity, Play, Pause, Flame, Droplet } from 'lucide-react';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from '@/components/ui/hover-card';

const WorkoutPlan = () => {
    const [activeDay, setActiveDay] = useState('1');
    const [timer, setTimer] = useState(0);
    const [exerciseTimer, setExerciseTimer] = useState(0);
    const [caloriesBurned, setCaloriesBurned] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [waterIntake, setWaterIntake] = useState(0);
    const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);

    // Format time for display
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const stats = {
        age: 22,
        weight: "66kg",
        height: "5'8\"",
        targetCalories: "2300-2500",
        restBetweenSets: "45-60 sec"
    };

    const workoutData = {
        stats,
        days: [
            {
                id: '1',
                name: 'Monday',
                type: 'High-Intensity + Core',
                color: 'bg-red-100',
                intensity: 'High',
                duration: '45 min',
                mainWorkout: [
                    { time: '00:00-01:00', exercise: 'Jumping jacks', reps: '60 sec' },
                    { time: '01:00-02:00', exercise: 'High knees', reps: '60 sec' },
                    { time: '02:00-03:00', exercise: 'Shuffle woodchops', reps: '60 sec' },
                    { time: '03:00-04:00', exercise: 'Jabs + uppercuts', reps: '60 sec' },
                    { time: '04:00-05:00', exercise: 'Squat + knee to elbow', reps: '60 sec' },
                    { time: '05:00-06:00', exercise: 'Scissor jumps', reps: '60 sec' },
                    { time: '06:00-07:00', exercise: 'Side lunge shuffle + floor touch', reps: '60 sec' },
                    { time: '07:00-08:00', exercise: 'In and out + knee to elbow', reps: '60 sec' },
                    { time: '08:00-09:00', exercise: 'Squat + twist jump', reps: '60 sec' },
                    { time: '09:00-10:00', exercise: 'Side lunge + knee thrust', reps: '60 sec' },
                    { time: '10:00-11:00', exercise: 'Runner step back + knee thrust', reps: '60 sec' },
                    { time: '11:00-12:00', exercise: 'Recovery/Water Break', reps: '60 sec' },
                    { time: '12:00-13:00', exercise: 'Knee up + continuous punching', reps: '60 sec' },
                    { time: '13:00-14:00', exercise: 'Ghost rope', reps: '60 sec' },
                    { time: '14:00-15:00', exercise: 'Run side to side + squat jack', reps: '60 sec' },
                    { time: '15:00-16:00', exercise: 'Shoulder + knee taps', reps: '60 sec' },
                    { time: '16:00-17:00', exercise: 'V sit + punch', reps: '60 sec' },
                    { time: '17:00-18:00', exercise: 'Out step + reach', reps: '60 sec' },
                    { time: '18:00-19:00', exercise: '4 climbers + kickback', reps: '60 sec' },
                    { time: '19:00-20:00', exercise: 'Max out pushups', reps: 'Until failure' }
                ],
                coreFinisher: [
                    { exercise: 'Bicycle Crunches', reps: '20x' },
                    { exercise: 'Russian Twists', reps: '20x' },
                    { exercise: 'Leg Raises', reps: '20x' },
                    { exercise: 'Plank Hold', reps: '30 sec' }
                ]
            },
            {
                id: '2',
                name: 'Tuesday',
                type: 'Cardio + Core',
                color: 'bg-blue-100',
                intensity: 'Low',
                duration: '40 min',
                mainWorkout: [
                    { time: '00:00-30:00', exercise: 'Light Jogging', reps: '30 min' }
                ],
                coreFinisher: [
                    { exercise: 'Flutter Kicks', reps: '20x' },
                    { exercise: 'Reverse Crunches', reps: '15x' },
                    { exercise: 'Mountain Climbers', reps: '15x' },
                    { exercise: 'Side Plank', reps: '30 sec each' }
                ]
            },
            {
                id: '3',
                name: 'Wednesday',
                type: 'High-Intensity',
                color: 'bg-red-100',
                intensity: 'High',
                duration: '45 min',
                mainWorkout: [
                    { time: '00:00-01:00', exercise: 'Jumping jacks', reps: '60 sec' },
                    { time: '01:00-02:00', exercise: 'High knees', reps: '60 sec' },
                    { time: '02:00-03:00', exercise: 'Shuffle woodchops', reps: '60 sec' },
                    { time: '03:00-04:00', exercise: 'Jabs + uppercuts', reps: '60 sec' },
                    { time: '04:00-05:00', exercise: 'Squat + knee to elbow', reps: '60 sec' },
                    { time: '05:00-06:00', exercise: 'Scissor jumps', reps: '60 sec' },
                    { time: '06:00-07:00', exercise: 'Side lunge shuffle + floor touch', reps: '60 sec' },
                    { time: '07:00-08:00', exercise: 'In and out + knee to elbow', reps: '60 sec' },
                    { time: '08:00-09:00', exercise: 'Squat + twist jump', reps: '60 sec' },
                    { time: '09:00-10:00', exercise: 'Side lunge + knee thrust', reps: '60 sec' },
                    { time: '10:00-11:00', exercise: 'Runner step back + knee thrust', reps: '60 sec' },
                    { time: '11:00-12:00', exercise: 'Recovery/Water Break', reps: '60 sec' },
                    { time: '12:00-13:00', exercise: 'Knee up + continuous punching', reps: '60 sec' },
                    { time: '13:00-14:00', exercise: 'Ghost rope', reps: '60 sec' },
                    { time: '14:00-15:00', exercise: 'Run side to side + squat jack', reps: '60 sec' },
                    { time: '15:00-16:00', exercise: 'Shoulder + knee taps', reps: '60 sec' },
                    { time: '16:00-17:00', exercise: 'V sit + punch', reps: '60 sec' },
                    { time: '17:00-18:00', exercise: 'Out step + reach', reps: '60 sec' },
                    { time: '18:00-19:00', exercise: '4 climbers + kickback', reps: '60 sec' },
                    { time: '19:00-20:00', exercise: 'Max out pushups', reps: 'Until failure' }
                ]
            },
            {
                id: '4',
                name: 'Thursday',
                type: 'Recovery',
                color: 'bg-green-100',
                intensity: 'Very Low',
                duration: '30 min',
                mainWorkout: [
                    { time: '00:00-30:00', exercise: 'Yoga/Stretching', reps: 'As needed' }
                ]
            },
            {
                id: '5',
                name: 'Friday',
                type: 'High-Intensity + Core',
                color: 'bg-red-100',
                intensity: 'High',
                duration: '45 min',
                mainWorkout: [
                    { time: '00:00-01:00', exercise: 'Jumping jacks', reps: '60 sec' },
                    { time: '01:00-02:00', exercise: 'High knees', reps: '60 sec' },
                    { time: '02:00-03:00', exercise: 'Shuffle woodchops', reps: '60 sec' },
                    { time: '03:00-04:00', exercise: 'Jabs + uppercuts', reps: '60 sec' },
                    { time: '04:00-05:00', exercise: 'Squat + knee to elbow', reps: '60 sec' },
                    { time: '05:00-06:00', exercise: 'Scissor jumps', reps: '60 sec' },
                    { time: '06:00-07:00', exercise: 'Side lunge shuffle + floor touch', reps: '60 sec' },
                    { time: '07:00-08:00', exercise: 'In and out + knee to elbow', reps: '60 sec' },
                    { time: '08:00-09:00', exercise: 'Squat + twist jump', reps: '60 sec' },
                    { time: '09:00-10:00', exercise: 'Side lunge + knee thrust', reps: '60 sec' },
                    { time: '10:00-11:00', exercise: 'Runner step back + knee thrust', reps: '60 sec' },
                    { time: '11:00-12:00', exercise: 'Recovery/Water Break', reps: '60 sec' },
                    { time: '12:00-13:00', exercise: 'Knee up + continuous punching', reps: '60 sec' },
                    { time: '13:00-14:00', exercise: 'Ghost rope', reps: '60 sec' },
                    { time: '14:00-15:00', exercise: 'Run side to side + squat jack', reps: '60 sec' },
                    { time: '15:00-16:00', exercise: 'Shoulder + knee taps', reps: '60 sec' },
                    { time: '16:00-17:00', exercise: 'V sit + punch', reps: '60 sec' },
                    { time: '17:00-18:00', exercise: 'Out step + reach', reps: '60 sec' },
                    { time: '18:00-19:00', exercise: '4 climbers + kickback', reps: '60 sec' },
                    { time: '19:00-20:00', exercise: 'Max out pushups', reps: 'Until failure' }
                ],
                coreFinisher: [
                    { exercise: 'Scissor Kicks', reps: '20x' },
                    { exercise: 'V-Ups', reps: '15x' },
                    { exercise: 'Toe Touches', reps: '15x' },
                    { exercise: 'Plank with Knee Taps', reps: '30 sec' }
                ]
            },
            {
                id: '6',
                name: 'Saturday',
                type: 'Cardio + Core',
                color: 'bg-blue-100',
                intensity: 'Low',
                duration: '35 min',
                mainWorkout: [
                    { time: '00:00-20:00', exercise: 'Cycling/Walking', reps: '20 min' }
                ],
                coreFinisher: [
                    { exercise: 'Sit-Ups', reps: '20x' },
                    { exercise: 'Oblique Crunches', reps: '15x each' },
                    { exercise: 'Leg Raises', reps: '20x' },
                    { exercise: 'Plank Hold', reps: '60 sec' }
                ]
            },
            {
                id: '7',
                name: 'Sunday',
                type: 'Rest',
                color: 'bg-gray-100',
                intensity: 'Rest',
                duration: '20 min',
                mainWorkout: [
                    { time: '00:00-20:00', exercise: 'Light Stretching', reps: 'As needed' }
                ]
            }
        ]
    };

    // Handle exercise progression
    const progressToNextExercise = useCallback(() => {
        const currentDay = workoutData.days.find(day => day.id === activeDay);
        if (currentDay && currentExerciseIndex < currentDay.mainWorkout.length - 1) {
            setCurrentExerciseIndex(prev => prev + 1);
            setExerciseTimer(0);
        } else if (currentDay && currentExerciseIndex === currentDay.mainWorkout.length - 1) {
            // Workout complete
            setIsTimerRunning(false);
            setCurrentExerciseIndex(0);
            setExerciseTimer(0);
        }
    }, [activeDay, currentExerciseIndex, workoutData.days]);

    // Timer effect
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isTimerRunning) {
            interval = setInterval(() => {
                setTimer(prev => prev + 1);
                setExerciseTimer(prev => prev + 1);
                setCaloriesBurned(prev => prev + 0.15);

                // Check if it's time to progress to next exercise
                if (exerciseTimer >= 59) { // Progress after 60 seconds
                    progressToNextExercise();
                }
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isTimerRunning, exerciseTimer, progressToNextExercise]);

    // Handle water intake
    const handleWaterIntake = () => {
        setWaterIntake(prev => Math.min(prev + 250, 3000));
    };

    // Get current exercise
    const currentDay = workoutData.days.find(day => day.id === activeDay);
    const currentExercise = currentDay?.mainWorkout[currentExerciseIndex];
    const nextExercise = currentDay?.mainWorkout[currentExerciseIndex + 1];

    // Reset workout when changing day
    useEffect(() => {
        setCurrentExerciseIndex(0);
        setExerciseTimer(0);
        setTimer(0);
        setIsTimerRunning(false);
        setCaloriesBurned(0);
    }, [activeDay]);


    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 md:px-8 md:py-6">
            {/* Hero Section */}
            <div className="mb-8 text-center">
                <h1 className="text-4xl font-bold text-blue-600 mb-2">Your Fitness Journey</h1>
                <p className="text-gray-600">Transforming goals into achievements, one workout at a time</p>
            </div>

            {/* Stats Display */}
            <div className="grid grid-cols-1 md:grid-cols-5 my-6">
                {Object.entries(stats).map(([key, value]) => (
                    <div key={key} className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="text-sm text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        <div className="text-lg font-semibold mt-1">{value}</div>
                    </div>
                ))}
            </div>


            {/* Main Dashboard */}
            <div className="grid lg:grid-cols-3 gap-6 mb-8">
                {/* Active Workout Card */}
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

                {/* Stats Card */}
                <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-200">
                    <CardHeader>
                        <CardTitle className="text-xl font-bold">Today's Progress</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {/* Calories */}
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span>Calories Burned</span>
                                <span className="font-medium">{Math.floor(caloriesBurned)} / 500</span>
                            </div>
                            <Progress value={(caloriesBurned / 500) * 100} className="h-2" />
                        </div>

                        {/* Water Intake */}
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span>Water Intake</span>
                                <span className="font-medium">{waterIntake}ml / 3000ml</span>
                            </div>
                            <Progress value={(waterIntake / 3000) * 100} className="h-2" />
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={handleWaterIntake}
                                className="w-full mt-2"
                            >
                                <Droplet className="mr-2 h-4 w-4" /> Add Water (250ml)
                            </Button>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <HoverCard>
                                <HoverCardTrigger asChild>
                                    <div className="bg-blue-50 p-4 rounded-lg cursor-help">
                                        <Flame className="h-5 w-5 text-orange-500 mb-2" />
                                        <div className="text-sm font-medium">Streak</div>
                                        <div className="text-2xl font-bold">7 days</div>
                                    </div>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    Keep your streak going by working out daily!
                                </HoverCardContent>
                            </HoverCard>

                            <HoverCard>
                                <HoverCardTrigger asChild>
                                    <div className="bg-blue-50 p-4 rounded-lg cursor-help">
                                        <Activity className="h-5 w-5 text-green-500 mb-2" />
                                        <div className="text-sm font-medium">Level</div>
                                        <div className="text-2xl font-bold">Pro</div>
                                    </div>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    You're doing great! Keep pushing to reach the next level.
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Enhanced Workout Schedule */}
            <Tabs value={activeDay} onValueChange={setActiveDay} className="space-y-4">
                <div className="mb-6">
                    <TabsList className="flex w-full justify-between bg-transparent space-x-2 p-0">
                        {workoutData.days.map((day) => (
                            <TabsTrigger
                                key={day.id}
                                value={day.id}
                                className={`
                  flex-1 
                  rounded-lg 
                  border-b-2 
                  data-[state=active]:border-blue-500 
                  data-[state=active]:bg-blue-50/50
                  data-[state=active]:shadow-none
                  transition-all 
                  duration-200 
                  hover:bg-gray-50
                `}
                            >
                                <div className="flex flex-col items-center py-3 px-2 w-full">
                                    <span className="font-medium text-base mb-1">{day.name}</span>
                                    <Badge
                                        variant="secondary"
                                        className={`
                      text-xs
                      border-none
                      ${day.intensity === 'High'
                                                ? 'bg-red-50 text-red-700'
                                                : day.intensity === 'Low'
                                                    ? 'bg-blue-50 text-blue-700'
                                                    : 'bg-gray-50 text-gray-700'}
                    `}
                                    >
                                        {day.type}
                                    </Badge>
                                </div>
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </div>

                {workoutData.days.map((day) => (
                    <TabsContent key={day.id} value={day.id} className="space-y-6">
                        {/* Main Workout Card */}
                        <Card className="bg-white shadow-xl">
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <CardTitle className="text-2xl font-bold flex items-center gap-2">
                                        <Dumbbell className="w-6 h-6 text-blue-500" />
                                        Main Workout
                                    </CardTitle>
                                    <Badge variant="secondary" className="text-sm">
                                        <Clock className="w-4 h-4 mr-1" />
                                        {day.duration}
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ScrollArea className="h-[400px] pr-4">
                                    <div className="space-y-4">
                                        {day.mainWorkout.map((exercise, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                            >
                                                <div className="flex items-center gap-4">
                                                    <Badge variant="outline" className="w-20 text-center">
                                                        {exercise.time.split('-')[0]}
                                                    </Badge>
                                                    <span className="font-medium">{exercise.exercise}</span>
                                                </div>
                                                <Badge>{exercise.reps}</Badge>
                                            </div>
                                        ))}
                                    </div>
                                </ScrollArea>
                            </CardContent>
                        </Card>

                        {/* Core Finisher Card */}
                        {day.coreFinisher && (
                            <Card className="bg-white shadow-xl">
                                <CardHeader className="border-b">
                                    <CardTitle className="text-xl font-bold flex items-center gap-2">
                                        <Flame className="w-6 h-6 text-orange-500" />
                                        Core Finisher
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                        {day.coreFinisher.map((exercise, idx) => (
                                            <div
                                                key={idx}
                                                className="flex flex-col items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
                                            >
                                                <span className="font-medium text-center mb-2">{exercise.exercise}</span>
                                                <Badge variant="secondary" className="bg-orange-200">
                                                    {exercise.reps}
                                                </Badge>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
};

export default WorkoutPlan;


