const express = require("express");
const env = require("dotenv");
env.config();
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint
app.get("/api/greet", (req, res) => {
  const name = req.query.name;
  if (!name) {
    return res.status(400).json({ error: "Name is required." });
  }
  res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
