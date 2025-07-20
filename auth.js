router.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const existingUser = await User.findOne({ email });
  
      if (!existingUser) {
        return res.status(400).json({ message: "User not found" });
      }
  
      if (existingUser.password !== password) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      res.status(200).json({ message: "Login successful", user: existingUser });
    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  });
  