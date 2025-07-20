import React from "react";
import { useNavigate } from "react-router-dom";

const explorePosts = [
  { img: "https://picsum.photos/300/300?random=101", caption: "Skyline dreams 🌆", likes: 120 },
  { img: "https://picsum.photos/300/300?random=102", caption: "Ocean breeze 🌊", likes: 89 },
  { img: "https://picsum.photos/300/300?random=103", caption: "Wanderlust 🧭", likes: 77 },
  { img: "https://picsum.photos/300/300?random=104", caption: "Nature's finest 🍃", likes: 99 },
  { img: "https://picsum.photos/300/300?random=105", caption: "Sunset hues 🌇", likes: 64 },
  { img: "https://picsum.photos/300/300?random=106", caption: "Desert trails 🐪", likes: 45 },
  { img: "https://picsum.photos/300/300?random=107", caption: "Frozen wonders ❄️", likes: 82 },
  { img: "https://picsum.photos/300/300?random=108", caption: "Book café 📚☕", likes: 71 },
  { img: "https://picsum.photos/300/300?random=109", caption: "Cozy mornings 🥐", likes: 55 },
  { img: "https://picsum.photos/300/300?random=110", caption: "Adventures ahead 🚴‍♀️", likes: 93 },
  { img: "https://picsum.photos/300/300?random=111", caption: "Retro vibes 📼", likes: 66 },
  { img: "https://picsum.photos/300/300?random=112", caption: "City rush 🚕", likes: 40 },
  { img: "https://picsum.photos/300/300?random=113", caption: "Art in the wild 🎨", likes: 59 },
  { img: "https://picsum.photos/300/300?random=114", caption: "Tropical escape 🌴", likes: 72 },
  { img: "https://picsum.photos/300/300?random=115", caption: "Midnight ride 🏍️", likes: 88 },
];

const Explore = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      padding: "2rem",
      backgroundColor: "#fff0f6",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
      color: "#333",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "2rem",
    },
    heading: {
      fontSize: "2rem",
      color: "#e91e63",
      fontWeight: "bold",
    },
    homeBtn: {
      background: "#e91e63",
      color: "#fff",
      border: "none",
      borderRadius: "30px",
      padding: "0.5rem 1.2rem",
      fontSize: "1rem",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      boxShadow: "0 3px 8px rgba(0, 0, 0, 0.1)",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
      gap: "1.5rem",
      justifyContent: "center",
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.2s",
      cursor: "pointer",
    },
    image: {
      width: "100%",
      height: "220px",
      objectFit: "cover",
    },
    caption: {
      padding: "1rem",
      textAlign: "center",
    },
    like: {
      fontWeight: "bold",
      color: "#ff4f79",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.heading}>Explore Trending Posts 🔥</h2>
        <button style={styles.homeBtn} onClick={() => navigate("/Home")}>
        ←
        </button>
      </div>

      <div style={styles.grid}>
        {explorePosts.map((post, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img src={post.img} alt={post.caption} style={styles.image} />
            <div style={styles.caption}>
              <p>{post.caption}</p>
              <p style={styles.like}>❤️ {post.likes}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
