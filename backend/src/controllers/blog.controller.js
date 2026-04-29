let blogs = []; // temporary (we'll replace with DB later)

// Create blog
const createBlog = (req, res) => {
  const { title, content, tags } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: "Title and content required" });
  }

  const newBlog = {
    id: Date.now(),
    title,
    content,
    tags: tags || []
  };

  blogs.push(newBlog);

  console.log(JSON.stringify({
    level: "info",
    message: "Blog created",
    blogId: newBlog.id
  }));

  res.status(201).json(newBlog);
};

// Get all blogs
const getBlogs = (req, res) => {
  console.log(JSON.stringify({
    level: "info",
    message: "Fetching all blogs"
  }));

  res.json(blogs);
};

module.exports = {
  createBlog,
  getBlogs
};
