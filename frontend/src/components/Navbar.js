import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">User Management Dashboard</div>
      <div className="navbar-menu">
        {isLoggedIn ? (
          <>
            <Link to="/dashboard" className="navbar-item">Dashboard</Link>
            <button onClick={onLogout} className="navbar-item logout-btn">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="navbar-item">Login</Link>
            <Link to="/signup" className="navbar-item">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 