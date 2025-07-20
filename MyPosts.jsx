import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const MyPosts = () => {
  const { user, deletePost, editPost } = useContext(UserContext);
  const posts = user.posts || [];
  const navigate = useNavigate();

  const [editingImage, setEditingImage] = useState(null);
  const [editData, setEditData] = useState({
    caption: "",
    tags: "",
    location: "",
  });

  const startEdit = (imgUrl) => {
    const post = posts.find((p) => p.img === imgUrl);
    if (!post) return;
    setEditingImage(imgUrl);
    setEditData({
      caption: post.caption,
      tags: post.tags.join(", "),
      location: post.location,
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const saveEdit = () => {
    const updatedPost = {
      img: editingImage,
      caption: editData.caption,
      tags: editData.tags.split(",").map((tag) => tag.trim()),
      location: editData.location,
    };
    editPost(editingImage, updatedPost);
    setEditingImage(null);
  };

  return (
    <div style={styles.container}>
      <button onClick={() => navigate("/Settings")} style={styles.backBtn}>
        ← 
      </button>
      <h2 style={styles.heading}>📝 My Posts</h2>
      {posts.length === 0 ? (
        <p style={styles.noPosts}>You haven't created any posts yet.</p>
      ) : (
        <ul style={styles.postList}>
          {posts.map((post) => (
            <li key={post.img} style={styles.card}>
              <img src={post.img} alt="Post" style={styles.image} />
              {editingImage === post.img ? (
                <div>
                  <input
                    type="text"
                    name="caption"
                    value={editData.caption}
                    onChange={handleEditChange}
                    placeholder="Edit caption"
                    style={styles.input}
                  />
                  <input
                    type="text"
                    name="tags"
                    value={editData.tags}
                    onChange={handleEditChange}
                    placeholder="Edit tags (comma separated)"
                    style={styles.input}
                  />
                  <input
                    type="text"
                    name="location"
                    value={editData.location}
                    onChange={handleEditChange}
                    placeholder="Edit location"
                    style={styles.input}
                  />
                  <button style={styles.saveBtn} onClick={saveEdit}>✅ Save</button>
                  <button style={styles.cancelBtn} onClick={() => setEditingImage(null)}>❌ Cancel</button>
                </div>
              ) : (
                <>
                  <p><strong>Caption:</strong> {post.caption}</p>
                  <p><strong>Tags:</strong> {post.tags.join(", ")}</p>
                  <p><strong>Location:</strong> {post.location}</p>
                  <div style={styles.actions}>
                    <button style={styles.editBtn} onClick={() => startEdit(post.img)}>✏️ Edit</button>
                    <button style={styles.deleteBtn} onClick={() => deletePost(post.img)}>🗑️ Delete</button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#ffe6f0",
    minHeight: "100vh",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
    position: "relative",
  },
  backBtn: {
    position: "absolute",
    top: "20px",
    left: "20px",
    backgroundColor: "#d63384",
    color: "#fff",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    fontSize: "1rem",
    cursor: "pointer",
  },
  heading: {
    textAlign: "center",
    fontSize: "2rem",
    color: "#d63384",
    marginBottom: "2rem",
  },
  noPosts: {
    textAlign: "center",
    fontSize: "1.2rem",
    color: "#888",
  },
  postList: {
    listStyle: "none",
    padding: 0,
    maxWidth: "800px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "#fff",
    padding: "1.2rem",
    borderRadius: "12px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
    marginBottom: "1.5rem",
  },
  image: {
    width: "100%",
    maxHeight: "300px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "1rem",
  },
  input: {
    display: "block",
    width: "100%",
    padding: "0.6rem",
    marginBottom: "0.8rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
  },
  saveBtn: {
    padding: "0.5rem 1rem",
    marginRight: "0.5rem",
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  cancelBtn: {
    padding: "0.5rem 1rem",
    backgroundColor: "#f44336",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  actions: {
    marginTop: "1rem",
  },
  editBtn: {
    marginRight: "0.6rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#ffc107",
    color: "#000",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  deleteBtn: {
    padding: "0.5rem 1rem",
    backgroundColor: "#e53935",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default MyPosts;
