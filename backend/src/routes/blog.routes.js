const express = require("express");
const router = express.Router();

let blogs = []; // temporary in-memory storage

// Create blog
router.post("/", (req, res) => {
  const { title, content, tags } = req.body;

  const newBlog = {
    id: Date.now(),
    title,
    content,
    tags
  };

  blogs.push(newBlog);

  console.log(JSON.stringify({
    level: "info",
    message: "Blog created",
    blogId: newBlog.id
  }));

  res.json(newBlog);
});

// Get all blogs
router.get("/", (req, res) => {
  res.json(blogs);
});

module.exports = router;
