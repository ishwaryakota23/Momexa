import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

const Privacy = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [lastLogin, setLastLogin] = useState("Loading...");
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetch last login activity (Replace with real API later)
    setTimeout(() => {
      setLastLogin("2025-07-09 14:35 from Chrome on Windows");
    }, 1000);
  }, []);

  const handlePasswordChange = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage("❌ New passwords do not match.");
      return;
    }

    try {
      const response = await axios.post("/api/change-password", {
        currentPassword,
        newPassword,
      });

      setMessage(response.data.message);
    } catch (error) {
      setMessage("❌ Failed to update password.");
    }
  };

  const handleLogoutAll = () => {
    alert("🔒 All sessions except this one have been logged out (simulate).");
    // Call backend to destroy all sessions here
  };

  const handleAccountDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete your account?");
    if (confirmDelete) {
      alert("Your account has been deleted. (Simulated)");
      navigate("/logout");
    }
  };

  return (
    <div className="privacy-container">
      <h2>🔐 Privacy & Security Settings</h2>

      {/* Last Login Info */}
      <div className="privacy-section">
        <h4>📅 Last Login Activity</h4>
        <p>{lastLogin}</p>
      </div>

      {/* Change Password */}
      <div className="privacy-section">
        <h4>🔑 Change Password</h4>
        <form onSubmit={handlePasswordChange} className="password-form">
          <label>Current Password</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />

          <label>New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />

          <label>Confirm New Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit" className="toggle-btn">Update Password</button>
          {message && <p className="msg">{message}</p>}
        </form>
      </div>

      {/* Logout of All Devices */}
      <div className="privacy-section">
        <h4>🛑 Log out from all devices</h4>
        <button className="toggle-btn" onClick={handleLogoutAll}>Logout All Sessions</button>
      </div>

      {/* Account Privacy Options */}
      <div className="privacy-section">
        <h4>🔒 Privacy Controls</h4>
        <label>
          Who can view your profile:
          <select>
            <option>Everyone</option>
            <option>Only Friends</option>
            <option>Only Me</option>
          </select>
        </label>
        <label>
          Who can message you:
          <select>
            <option>Everyone</option>
            <option>Only Friends</option>
            <option>No one</option>
          </select>
        </label>
      </div>

      {/* Account Delete */}
      <div className="privacy-section">
        <h4>⚠️ Delete Account</h4>
        <button className="danger-btn" onClick={handleAccountDelete}>
          Delete My Account
        </button>
      </div>
    </div>
  );
};

export default Privacy;
