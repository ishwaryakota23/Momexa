// src/components/PostList.jsx
import React from "react";
import Post from "./Post";

const PostList = () => {
  // Dummy data for now

    const posts = [
        {
          id: 1,
          username: "ishwarya_k",
          userProfilePic: "https://i.pravatar.cc/150?img=5",
          imageUrl: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=600&q=80",
          caption: "Loving the new vibes!",
        },
        {
          id: 2,
          username: "john_doe",
          userProfilePic: "https://i.pravatar.cc/150?img=3",
          imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
          caption: "Beautiful sunset today 🌇",
        },
      ];
      
  

  return (
    <div className="post-list">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
