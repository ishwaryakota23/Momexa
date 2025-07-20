// src/pages/Logout.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Logout.css"; // Optional styling

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // ✅ Clear session/local storage
    localStorage.clear();
    sessionStorage.clear();

    // ✅ Redirect to /login
    navigate("/login");
  };

  const handleCancel = () => {
    // Go back to previous page or home
    navigate(-1); // or navigate("/profile") etc.
  };

  return (
    <div className="logout-container">
      <div className="logout-box">
        <h2>Are you sure you want to logout?</h2>
        <div className="logout-buttons">
          <button onClick={handleCancel} className="cancel-btn">Cancel</button>
          <button onClick={handleLogout} className="logout-btn">Logout Now</button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
