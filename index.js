import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
import WelcomePage from './WelcomePage';
import WorkoutRecommendation from './src/WorkoutRecommendation';
import Navbar from './src/navbar';
import SavedWorkouts from './src/Savedworkouts';
import ProgressTracker from './src/ProgressTracker';
import WorkoutDemos from './src/WorkoutDemos';
import Profile from './src/Profle';
import Login from './src/Login';
import Register from './src/Register';


const isLoggedIn = ()=>{
  return localStorage.getItem('isLoggedIn') === 'true';
};

const ProtectedRoute = ({children})=> {
  if(!isLoggedIn()){
    return <Navigate to = "/login"></Navigate>;
  }
  return children;
}



const App = () => {
  return (
    
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/' element={<ProtectedRoute>
          <WelcomePage></WelcomePage>
        </ProtectedRoute>}></Route>
        <Route path='/workout' element={<ProtectedRoute>
          <WorkoutRecommendation></WorkoutRecommendation>
        </ProtectedRoute>}></Route>
        {/* <Route path="/" element={<WelcomePage />} />
        <Route path="/workout" element={<WorkoutRecommendation />} /> */}
        <Route path="/saved-workouts" element={<ProtectedRoute>
          <SavedWorkouts></SavedWorkouts>
        </ProtectedRoute>} />
        <Route path="/progress-tracker" element={<ProtectedRoute>
          <ProgressTracker></ProgressTracker>
        </ProtectedRoute>} />
        <Route path="/workout-demos" element={<ProtectedRoute>
          <WorkoutDemos></WorkoutDemos>
        </ProtectedRoute>} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

{/* <Router>
<Navbar />
<Routes>
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route
    path="/"
    element={
      <ProtectedRoute>
        <WelcomePage />
      </ProtectedRoute>
    }
  />
  <Route
    path="/workout"
    element={
      <ProtectedRoute>
        <WorkoutRecommendation />
      </ProtectedRoute>
    }
  />
  <Route
    path="/saved-workouts"
    element={
      <ProtectedRoute>
        <SavedWorkouts />
      </ProtectedRoute>
    }
  />
  <Route
    path="/progress-tracker"
    element={
      <ProtectedRoute>
        <ProgressTracker />
      </ProtectedRoute>
    }
  />
  <Route
    path="/workout-demos"
    element={
      <ProtectedRoute>
        <WorkoutDemos />
      </ProtectedRoute>
    }
  />
  <Route
    path="/profile"
    element={
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    }
  />
</Routes>
</Router>
);
}; */}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)