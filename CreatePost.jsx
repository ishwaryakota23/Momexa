import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const Create = () => {
  const navigate = useNavigate();
  const { addPost } = useContext(UserContext);

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [caption, setCaption] = useState("");
  const [tags, setTags] = useState("");
  const [location, setLocation] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!imagePreview || !caption) {
      alert("Image and caption are required!");
      return;
    }

    const newPost = {
      img: imagePreview,
      caption,
      tags: tags.split(",").map((t) => t.trim()),
      location,
    };

    addPost(newPost);
    navigate("/profile");
  };

  return (
    <div style={styles.container}>
      <Link to="/" style={{ textDecoration: "none", color: "#333" }}>  </Link>
      <h2 style={styles.heading}>📸 Create a New Post</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={styles.input}
        />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            style={{ width: "100%", borderRadius: "8px", maxHeight: "300px", objectFit: "cover" }}
          />
        )}
        <textarea
          placeholder="Write a caption..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          style={styles.textarea}
        />
        <input
          type="text"
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.postBtn}>📤 Post</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    background: "#fff0f5",
    padding: "2rem",
    minHeight: "100vh",
    fontFamily: "Arial",
  },
  heading: {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "1.5rem",
    color: "#d63384",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    maxWidth: "500px",
    margin: "0 auto",
  },
  input: {
    padding: "0.6rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "0.6rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
    minHeight: "100px",
    resize: "vertical",
  },
  postBtn: {
    padding: "0.7rem",
    backgroundColor: "#ff69b4",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
};

export default Create;
