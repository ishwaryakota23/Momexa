import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const Profile = () => {
  const navigate = useNavigate();
  const { user, deletePost } = useContext(UserContext);


  const defaultPosts = [
    {
        img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
        caption: "Sunny vibes ☀️",
      },
      {
        img: "https://images.unsplash.com/photo-1519682337058-a94d519337bc",
        caption: "City lights at night 🌆",
      },
    {
      img: "https://picsum.photos/300/300?random=1",
      caption: "Random moment ✨",
    },
    {
      img: "https://picsum.photos/300/300?random=2",
      caption: "Chill vibes 🧘‍♀️",
    },
  ];

  const posts = [...(user.posts || []), ...defaultPosts];
  const [selectedPost, setSelectedPost] = useState(null);

  const openPost = (post) => setSelectedPost(post);
  const closePost = () => setSelectedPost(null);

  return (
    <div style={styles.container}>
      {/* Home Icon Button */}
      <button style={styles.homeButton} onClick={() => navigate("/home")}>
      ←
      </button>

      {/* Profile Info */}
      <div style={styles.profileSection}>
        <img src={user.profilePic} alt="Profile" style={styles.profilePic} />
        <div>
          <h2>{user.username}</h2>
          <p>{user.bio}</p>
          <button onClick={() => navigate("/edit-profile")} style={styles.editBtn}>
            Edit Profile
          </button>
        </div>
      </div>

      {/* My Posts */}
      <h2 style={styles.heading}>My Posts</h2>
      <div style={styles.gallery}>
        {posts.map((post, index) => (
          <img
            key={index}
            src={post.img}
            alt={`Post ${index}`}
            onClick={() => openPost(post)}
            style={styles.postImg}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedPost && (
        <div style={styles.modalOverlay} onClick={closePost}>
          <div onClick={(e) => e.stopPropagation()} style={styles.modalContent}>
            <img src={selectedPost.img} alt="Post" style={styles.modalImg} />
            <p>{selectedPost.caption}</p>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <button style={btnStyle}>❤️ Like</button>
              <button style={btnStyle}>💬 Comment</button>
              <button style={btnStyle}>📤 Share</button>
              <button
    style={{ ...btnStyle, backgroundColor: "#ff4d4d" }}
    onClick={() => {
      deletePost(selectedPost.img);
      closePost();
    }}
  >
    🗑 Delete
  </button>
            </div>
            <button onClick={closePost} style={styles.closeBtn}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

// Styles
const styles = {
  container: {
    backgroundColor: "#ffe6f0",
    minHeight: "100vh",
    padding: "2rem",
    color: "#000",
    fontFamily: "Arial, sans-serif",
    position: "relative",
  },
  homeButton: {
    position: "absolute",
    top: "1rem",
    left: "1rem",
    padding: "0.4rem 0.8rem",
    backgroundColor: "#ffc0cb",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "1.2rem",
  },
  profileSection: {
    display: "flex",
    alignItems: "center",
    marginBottom: "2rem",
    marginTop: "2rem",
  },
  profilePic: {
    width: "140px",
    height: "140px",
    borderRadius: "50%",
    marginRight: "1.5rem",
    objectFit: "cover",
    border: "3px solid #fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  editBtn: {
    padding: "0.5rem 1rem",
    background: "linear-gradient(45deg, #ffa07a, #ffb6b9)",
    color: "black",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "1.5rem",
    fontSize: "1.8rem",
  },
  gallery: {
    display: "flex",
    justifyContent: "center",
    gap: "1.5rem",
    flexWrap: "wrap",
  },
  postImg: {
    width: "220px",
    height: "220px",
    objectFit: "cover",
    borderRadius: "12px",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    transition: "transform 0.3s",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw",
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: "white",
    padding: "1rem",
    borderRadius: "12px",
    maxWidth: "500px",
    width: "90%",
    textAlign: "center",
    boxShadow: "0 6px 15px rgba(0,0,0,0.3)",
  },
  modalImg: {
    width: "100%",
    borderRadius: "10px",
    marginBottom: "1rem",
  },
  closeBtn: {
    marginTop: "1rem",
    backgroundColor: "#ccc",
    padding: "0.4rem 1rem",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

const btnStyle = {
  padding: "0.5rem 1rem",
  backgroundColor: "#ffb48f",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold",
  color: "#fff",
  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
};

export default Profile;
