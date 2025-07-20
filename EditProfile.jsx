import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const EditProfile = () => {
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState(user.username);
  const [bio, setBio] = useState(user.bio);
  const [profilePic, setProfilePic] = useState(user.profilePic);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, bio, profilePic });
    navigate("/profile", { replace: true }); // prevents back navigation
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif", background: "#fff0f5", minHeight: "100vh" }}>
      <button style={{ ...homeBtnStyle }} onClick={() => navigate("/")}>🏠 Home</button>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px", marginTop: "2rem" }}>
        <label>Username:</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} required style={inputStyle} />

        <label>Bio:</label>
        <textarea value={bio} onChange={(e) => setBio(e.target.value)} required style={inputStyle} />

        <label>Profile Picture URL:</label>
        <input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} required style={inputStyle} />

        <button type="submit" style={submitBtn}>Save</button>
      </form>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "0.5rem",
  margin: "0.5rem 0 1rem 0",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const submitBtn = {
  padding: "0.6rem 1.2rem",
  backgroundColor: "#ff69b4",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold",
};

const homeBtnStyle = {
  position: "absolute",
  top: "1rem",
  left: "1rem",
  padding: "0.4rem 0.8rem",
  backgroundColor: "#ffc0cb",
  border: "none",
  borderRadius: "8px",
  fontWeight: "bold",
  cursor: "pointer",
};

export default EditProfile;
