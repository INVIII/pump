export const workoutData = {
    stats: {
      age: 22,
      weight: "66kg",
      height: "5'8\"",
      targetCalories: "2300-2500",
      restBetweenSets: "45-60 sec"
    },
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
          { time: '03:00-04:00', exercise : 'Jabs + uppercuts', reps: '60 sec' },
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
          { time: '19:00-20:00', exercise: 'Max out push ups', reps: 'Until failure' }
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