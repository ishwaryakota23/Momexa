import React, { useState } from "react";
import "./auth.css";

const Signup = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const validate = () => {
    const { firstName, lastName, email, password, confirmPassword } = form;

    if (!firstName || !lastName || !email || !password || !confirmPassword)
      return "All fields are required.";

    if (!email.includes("@"))
      return "Email must contain '@'.";

    if (password.length < 8)
      return "Password must be at least 8 characters.";

    const passwordPattern = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/;
    if (!passwordPattern.test(password))
      return "Password must contain letters, numbers, and symbols.";

    if (password !== confirmPassword)
      return "Passwords do not match.";

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
  
    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        setError(data.message || "Signup failed.");
      } else {
        setSuccess("Signup successful!");
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: ""
        });
      }
    } catch (err) {
      setError("Server error. Please try again.");
    }
  };
  
  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="auth-field">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="auth-field">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="auth-field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="auth-field">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <div className="auth-field">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
          />
        </div>

        {error && <div className="auth-error">{error}</div>}
        {success && <div className="auth-success">{success}</div>}

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
