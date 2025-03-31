import React from 'react';
import { useNavigate } from 'react-router';


const WelcomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/workout');
  };

  return (
    <div className="welcome-page">
      <h1>WELCOME TO WAKEFIT</h1>
      <p>
      At WakeFit, we believe that fitness is not a one-size-fits-all approach. Whether you’re looking to lose weight, build muscle, improve your endurance, or simply stay active and healthy, WakeFit is here to guide you every step of the way.

Our app is designed to tailor workouts and wellness plans specifically to your individual goals and needs, making it easier than ever to reach your full potential. With a range of features that track your progress, provide personalized workout plans, and offer motivation at every turn, WakeFit helps you stay committed to your fitness journey—no matter where you're starting from.
      
      </p>
      <button onClick={handleGetStarted}>GET STARTED</button>
    </div>
  );
};

export default WelcomePage;