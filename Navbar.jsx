// src/components/Navbar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiHome, FiBell, FiLogOut } from "react-icons/fi";
import "../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add your logout logic here
    // For now, just redirect to landing/login page
    localStorage.clear(); // or any auth cleanup
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/" className="logo-text">Momexa</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/Notifications" className="nav-item"><FiBell /> Notifications</Link>
        <button onClick={handleLogout} className="nav-item logout-button">
          <FiLogOut /> Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
