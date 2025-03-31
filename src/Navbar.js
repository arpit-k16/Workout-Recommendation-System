import React from 'react';
import { Link, useNavigate } from 'react-router';
// Import the CSS file

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem('isLoggedIn')
    navigate('/login')
  }
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Wakefit</Link> {/* Logo on the left */}
      </div>
      <div className="navbar-links">
        <Link to="/workout">Workout Generator</Link>
        <Link to="/saved-workouts">Saved Workouts</Link>
        <Link to="/progress-tracker">Progress Tracker</Link>
        <Link to="/workout-demos">Workout Demos</Link>
      </div>
      <div className="navbar-profile-logout">
        <button onClick={handleLogout}>Logout</button>
        
        <Link to="/profile">
        <div className='profile-icon'></div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;