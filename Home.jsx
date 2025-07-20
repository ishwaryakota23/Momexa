// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PostList from "../components/PostList";
import "../styles/Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Replace with real API call later
    setPosts([
      {
        username: "john_doe",
        userAvatar: "/avatars/john.jpg",
        imageUrl: "/posts/sample1.jpg",
        caption: "Hello from Paris!",
        likes: 150,
      },
      {
        username: "momexa_fan",
        userAvatar: "/avatars/user2.png",
        imageUrl: "/posts/sample2.jpg",
        caption: "Life is beautiful 💫",
        likes: 88,
      },
    ]);
  }, []);

  return (
    <>
      <Navbar />
      <div className="home-container">
        <Sidebar />
        <div className="feed">
          <PostList posts={posts} />
        </div>
      </div>
    </>
  );
};

export default Home;
