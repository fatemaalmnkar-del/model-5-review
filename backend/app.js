const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the server express!' });
});
app.get('/api/server', (req, res) => {
  res.json({ message: 'server is running!' });
});

module.exports = app; // Export the app for testing purposes