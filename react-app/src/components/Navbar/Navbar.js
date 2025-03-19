// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left">
        <h1>My Website</h1>
      </div>
      <div className="right">
        <Link to="/home">Home</Link>
        <Link to="/not-home">Not Home</Link>
      </div>
    </nav>
  );
};

export default Navbar;
