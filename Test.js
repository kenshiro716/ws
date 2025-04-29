const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

// Serve static files like CSS/JS from /dashboard folder
app.use(express.static(path.join(__dirname, "dashboard")));

// Serve login.html on root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dashboard", "login.html"));
});

// Optional: Handle favicon.ico to avoid 502
app.get('/favicon.ico', (req, res) => res.status(204).end());

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server started on port ${PORT}`);
});
