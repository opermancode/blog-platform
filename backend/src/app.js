const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  console.log(JSON.stringify({
    level: "info",
    message: "Health check hit"
  }));
  res.send("Backend is running");
});

app.listen(3000, () => {
  console.log(JSON.stringify({
    level: "info",
    message: "Server started on port 3000"
  }));
});
