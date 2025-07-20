import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const DarkMode = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDark);
    localStorage.setItem("darkMode", isDark);
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  const goBackToSettings = () => {
    navigate("/settings");
  };

  return (
    <div className="dark-mode-container">
      <h2>🌓 Dark Mode Settings</h2>
      <p>Toggle to switch between Light and Dark Mode for the whole app.</p>
      <button onClick={toggleDarkMode} className="toggle-btn">
        {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      <br /><br />
      
      <button onClick={goBackToSettings} className="back-btn">
  🔙 
</button>

    </div>
  );
};

export default DarkMode;
