const express = require("express");
const router = express.Router();

const {
  createBlog,
  getBlogs
} = require("../controllers/blog.controller");

router.post("/", createBlog);
router.get("/", getBlogs);

module.exports = router;
