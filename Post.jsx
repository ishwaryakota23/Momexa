import React from "react";
import "../styles/Post.css";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post-header">
        <img src={post.userProfilePic} alt="User" />
        <span className="post-username">{post.username}</span>
      </div>
      <img className="post-image" src={post.imageUrl} alt="Post" />
      <div className="post-content">
        <div className="post-actions">
          <span role="img" aria-label="Like">❤️</span>
          <span role="img" aria-label="Comment">💬</span>
          <span role="img" aria-label="Share">📤</span>
        </div>
        <p className="post-caption">
          <b>{post.username}</b> {post.caption}
        </p>
      </div>
    </div>
  );
};

export default Post;
