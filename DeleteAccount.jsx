import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DeleteAccount = () => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "⚠️ Are you sure you want to delete your account? This action cannot be undone."
    );
    if (!confirmDelete) return;

    try {
      const response = await axios.delete("/api/user/delete", {
        withCredentials: true, // include auth cookies/token if needed
      });

      if (response.status === 200) {
        alert("Your account has been deleted.");
        // Clear local storage/session and redirect to homepage or login
        localStorage.clear();
        navigate("/signup");
      }
    } catch (error) {
      console.error("Error deleting account:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="delete-account-container">
      <h2>🗑️ Delete My Account</h2>
      <p>
        This will permanently remove your account and all your data. This action cannot be undone.
      </p>
      <button onClick={handleDelete} className="delete-btn">
        Delete My Account
      </button>
    </div>
  );
};

export default DeleteAccount;
