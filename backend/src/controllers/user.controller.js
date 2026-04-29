let users = [];

// Signup
const signup = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password required" });
  }

  const user = {
    id: Date.now(),
    email,
    password // (we'll hash later)
  };

  users.push(user);

  console.log(JSON.stringify({
    level: "info",
    message: "User created",
    userId: user.id
  }));

  res.status(201).json(user);
};

// Login
const login = (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  console.log(JSON.stringify({
    level: "info",
    message: "User logged in",
    userId: user.id
  }));

  res.json({ message: "Login successful", user });
};

module.exports = {
  signup,
  login
};
