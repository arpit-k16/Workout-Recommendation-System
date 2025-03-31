import React, { useState } from 'react';
import WorkoutForm from './WorkoutForm';
import WorkoutPlan from './WorkoutPlan';


const WorkoutRecommendation = () => {
  const [workoutPlan, setWorkoutPlan] = useState(null);

  const handleFormSubmit = (goal) => {
    const plan = generateWorkoutPlan(goal);
    setWorkoutPlan(plan);
  };

  const generateWorkoutPlan = (goal) => {
    const plans = {
      weightLoss: [
        { exercise: 'Treadmill', duration: '30 mins' },
        { exercise: 'Jumping Jacks', duration: '15 mins' },
        { exercise: 'Plank', duration: '1 min' },
        { exercise: 'Squats', duration: '45 seconds'}
      ],
      muscleGain: [
        { exercise: 'Bench Press', sets: 3, reps: 10 },
        { exercise: 'Squats', sets: 3, reps: 12 },
        { exercise: 'Deadlifts', sets: 3, reps: 8 },
      ],
      endurance: [
        { exercise: 'Cycling', duration: '45 mins' },
        { exercise: 'Swimming', duration: '30 mins' },
        { exercise: 'Burpees', duration: '20 mins' },
      ],
      flexibility: [
        { exercise: 'Yoga', duration: '30 mins' },
        { exercise: 'Stretching', duration: '20 mins' },
        { exercise: 'Pilates', duration: '30 mins' },
        { exercise: 'Calisthenics', duration: '10 minutes'}
      ],
      improved: [
        { exercise: 'Walking', duration: '10000 steps'},
        { exercise: 'Sleep', duration: '7 hours daily'},
        { exercise: 'Meditation', duration: '30 minutes daily'}
        
      ],

      functional: [
        {exercise: 'Lunges', duration: '30-40 seconds    3reps'},
        {exercise: 'Plank', duration: '30-60 seconds    2reps'},
        {exercise: 'Deadlifts', duration: '3 sets of 10-12 reps'},
        {exercise: 'Single leg balance', duration: 'hold for 30 seconds'},
        {exercise: 'Mountain Climbers', duration: '3 sets of 30-45 seconds'}
      ],

      Performance: [
        {exercise: 'Sprints', duration: ' 6 X 30 meters'},
        {exercise: 'Box Jumps', duration: '30-40 seconds    3reps'},
        {exercise: 'Burpees', duration: '30-40 seconds    3reps'},
        {exercise: 'Medicine Ball Slamps', duration: '30-40 seconds    3reps'},
        {exercise: 'Kettleball Swings', duration: '30-40 seconds    3reps'},

      ],

      Wellness: [
        {exercise: 'Lunges', duration: '30-40 seconds    3reps'},
        {exercise: 'Lunges', duration: '30-40 seconds    3reps'},
        {exercise: 'Lunges', duration: '30-40 seconds    3reps'},
        {exercise: 'Lunges', duration: '30-40 seconds    3reps'},
        {exercise: 'Lunges', duration: '30-40 seconds    3reps'},


      ]



    };

    return plans[goal] || null;
  };

  return (
    <div className="App">
      <h1>Personalized Workout Recommendation</h1>
      <WorkoutForm onSubmit={handleFormSubmit} />
      {workoutPlan && <WorkoutPlan plan={workoutPlan} />}
    </div>
  );
};

export default WorkoutRecommendation;