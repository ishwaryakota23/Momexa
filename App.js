import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/Home";
import Logout from "./pages/Logout"; 
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import CreatePost from "./pages/CreatePost";
import Explore from "./pages/Explore";
import MyPosts from "./pages/MyPosts";
import Notifications from "./pages/Notifications";
import Privacy from "./pages/Privacy"; 
import DeleteAccount from "./pages/DeleteAccount";
import "./App.css";

const Landing = () => {
  const emojis = [
    "📸", "😊", "🌍", "❤️", "🎉", "🧠", "🌈", "👫", "📷", "🕊️",
    "😍", "🤗", "💞", "😄", "😘", "💖", "✨", "☁️", "🌌", "💑"
  ];

  return (
    <div className="app">
      <div className="emojis">
        {emojis.map((emoji, index) => (
          <div
            key={index}
            className="emoji"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${8 + Math.random() * 8}s`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${1 + Math.random() * 2}rem`
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      <h1 className="momexa-title">Momexa</h1>
      <p className="tagline">Relive. Share. Connect.</p>

      <div className="buttons">
        <Link to="/login"><button className="login-btn">Login</button></Link>
        <Link to="/signup"><button className="signup-btn">Sign Up</button></Link>
      </div>
    </div>
  );
};

function App() {
  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode") === "true";
    document.body.classList.toggle("dark-mode", darkMode);
  }, []);
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/my-posts" element={<MyPosts />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/delete-account" element={<DeleteAccount />} />
<Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      </Routes>
   </UserProvider>
  );
}

export default App;
