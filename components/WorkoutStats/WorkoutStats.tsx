import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { Flame, Activity, Droplet } from 'lucide-react';

interface WorkoutStatsProps {
  caloriesBurned: number;
  waterIntake: number;
  setWaterIntake: (intake: number) => void;
}

const WorkoutStats: React.FC<WorkoutStatsProps> = ({
  caloriesBurned,
  waterIntake,
  setWaterIntake,
}) => {
  const handleWaterIntake = () => {
    setWaterIntake(Math.min(waterIntake + 250, 3000));
  };

  return (
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
  );
};

export default WorkoutStats;