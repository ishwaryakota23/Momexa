// src/components/Sidebar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Sidebar.css"; // We'll style it next

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/Home", label: "Home", icon: "🏠" },
    { path: "/explore", label: "Explore", icon: "🔍" },
    { path: "/create", label: "Create", icon: "➕" },
    { path: "/profile", label: "Profile", icon: "👤" },
    { path: "/Settings", label: "Settings", icon: "⚙️" },
  ];

  return (
    <div className="sidebar-container">
    
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.path} className={location.pathname === item.path ? "active" : ""}>
            <Link to={item.path}>
              <span className="icon">{item.icon}</span>
              <span className="label">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
