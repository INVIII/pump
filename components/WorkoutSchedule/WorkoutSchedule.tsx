import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Clock, Dumbbell, Flame } from 'lucide-react';
import { workoutData } from '@/data/workoutData';

interface WorkoutScheduleProps {
  activeDay: string;
  setActiveDay: (day: string) => void;
  setCurrentExerciseIndex: (index: number) => void;
  setExerciseTimer: (timer: number) => void;
  setTimer: (timer: number) => void;
  setIsTimerRunning: (isRunning: boolean) => void;
  setCaloriesBurned: (calories: number) => void;
}

const WorkoutSchedule: React.FC<WorkoutScheduleProps> = ({
  activeDay,
  setActiveDay,
  setCurrentExerciseIndex,
  setExerciseTimer,
  setTimer,
  setIsTimerRunning,
  setCaloriesBurned,
}) => {
  return (
    <Tabs value={activeDay} onValueChange={setActiveDay} className="space-y-4">
      <div className="mb-6">
        <TabsList className="flex w-full justify-between bg-transparent space-x-2 p-0">
          {workoutData.days.map((day) => (
            <TabsTrigger
              key={day.id}
              value={day.id}
              className={ `
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
  );
};

export default WorkoutSchedule;