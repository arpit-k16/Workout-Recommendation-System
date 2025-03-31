import React from 'react';
// import './index.css';

const WorkoutPlan = ({ plan }) => {
  return (
    <div className="WorkoutPlan">
      <h2>Your Personalized Workout Plan</h2>
      <ul>
        {plan.map((exercise, index) => (
          <li key={index}>
            {exercise.exercise} - {exercise.duration || `${exercise.sets} sets of ${exercise.reps} reps`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutPlan;