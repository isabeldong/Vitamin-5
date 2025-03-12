import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2>My Website</h2>
      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/not-home">Not Home</Link>
      </div>
    </div>
  );
};

export default Navbar;
