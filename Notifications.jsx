import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Notifications = () => {
  const { user, markAllAsSeen } = useContext(UserContext);
  const navigate = useNavigate();
  const notifications = user.notifications || [];

  return (
    <div style={styles.container}>
      <button onClick={() => navigate("/Settings")} style={styles.backBtn}>← Back</button>
      <h2 style={styles.heading}>🔔 Notifications</h2>

      {notifications.length === 0 ? (
        <p style={styles.noNotifs}>You have no notifications right now.</p>
      ) : (
        <ul style={styles.list}>
          {notifications.map((notif) => (
            <li key={notif.id} style={notif.seen ? styles.itemSeen : styles.itemNew}>
              {notif.message}
            </li>
          ))}
        </ul>
      )}

      {notifications.length > 0 && (
        <button onClick={markAllAsSeen} style={styles.markBtn}>
          ✅ Mark all as read
        </button>
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
    backgroundColor: "#6c63ff",
    color: "#fff",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    cursor: "pointer",
  },
  heading: {
    textAlign: "center",
    fontSize: "2rem",
    color: "#6c63ff",
    marginBottom: "2rem",
  },
  noNotifs: {
    textAlign: "center",
    color: "#888",
    fontSize: "1.1rem",
  },
  list: {
    listStyle: "none",
    padding: 0,
    maxWidth: "600px",
    margin: "0 auto",
  },
  itemNew: {
    padding: "1rem",
    backgroundColor: "#e6f7ff",
    borderLeft: "6px solid #ccc",
    borderRadius: "6px",
    marginBottom: "1rem",
    fontWeight: "bold",
  },
  itemSeen: {
    padding: "1rem",
    backgroundColor: "#f0f0f0",
    borderLeft: "6px solid #ccc",
    borderRadius: "6px",
    marginBottom: "1rem",
    color: "#666",
  },
  markBtn: {
    display: "block",
    margin: "2rem auto 0",
    padding: "0.6rem 1.2rem",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default Notifications;
