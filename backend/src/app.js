const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user.routes");

const app = express();

// ✅ THIS LINE IS CRITICAL
app.use(express.json());

app.use(cors());
app.use("/users", userRoutes);

// routes
const blogRoutes = require("./routes/blog.routes");
app.use("/blogs", blogRoutes);

// health check
app.get("/", (req, res) => {
  res.send("Backend running");
});

app.listen(3000, () => {
  console.log(JSON.stringify({
    level: "info",
    message: "Server started on port 3000"
  }));
});
