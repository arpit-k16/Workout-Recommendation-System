import React, { useState } from 'react';
// import './index.css';

const WorkoutForm = ({ onSubmit }) => {
  const [goal, setGoal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(goal);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select your fitness goal:
        <select value={goal} onChange={(e) => setGoal(e.target.value)}>
          <option value="">Select a goal</option>
          <option value="weightLoss">Weight Loss</option>
          <option value="muscleGain">Muscle Gain</option>
          <option value="endurance">Endurance</option>
          <option value="flexibility">Flexibility</option>
          <option value="improved">Improved Mental Health</option>
          <option value="functional">Functional fitness</option>
          <option value="Performance">Sports Performance</option>
          <option value="Wellness">General Health and Wellness</option>
        </select>
      </label>
      <button type="submit">Get Workout Plan</button>
    </form>
  );
};

export default WorkoutForm;