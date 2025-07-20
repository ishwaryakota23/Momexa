// src/pages/Settings.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Settings.css";

const Settings = () => {
  const navigate = useNavigate();

  const settingsItems = [
    { label: "My Posts", path: "/my-posts" },
    { label: "Notifications", path: "/Notifications" },
    { label: "Privacy & Security", path: "/privacy" },
    { label: "Delete My Account", path: "/delete-account" },
    { label: "Logout", path: "/Logout" },
    { label: "Back To Home" , path: "/Home"}
   
  ];

  return (
    <div className="settings-container">
      <div className="settings-box">
        <h2 className="settings-title">Settings</h2>
        <ul className="settings-list">
          {settingsItems.map((item, index) => (
            <li
              key={index}
              className="settings-item"
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Settings;

