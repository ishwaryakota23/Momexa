
// src/contexts/UserContext.js
import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "ishwarya_k",
    profilePic: "https://i.pravatar.cc/150?img=5",
    bio: "Web dev | Explorer | Foodie 🍕✨",
    posts: [], 
    notifications: [],// ✅ make sure this exists
  });

  const addPost = (post) => {
    setUser((prev) => ({
      ...prev,
      posts: [post, ...(prev.posts || [])], // use fallback in case posts is undefined
    }));
  };
  const deletePost = (imgUrl) => {
    setUser((prev) => ({
      ...prev,
      posts: prev.posts?.filter((post) => post.img !== imgUrl),
    }));
  };
  const editPost = (imgUrl, updatedPost) => {
    setUser((prev) => ({
      ...prev,
      posts: prev.posts.map((post) =>
        post.img === imgUrl ? updatedPost : post
      ),
    }));
  };
  const addNotification = (message) => {
    setUser((prev) => ({
      ...prev,
      notifications: [
        { id: Date.now(), message, seen: false },
        ...(prev.notifications || []),
      ],
    }));
  };
  
  const markAllAsSeen = () => {
    setUser((prev) => ({
      ...prev,
      notifications: prev.notifications.map((n) => ({ ...n, seen: true })),
    }));
  };
  return (
<UserContext.Provider value={{ user, setUser, addPost, deletePost, editPost, addNotification, markAllAsSeen }}>

      {children}
    </UserContext.Provider>
  );
};
