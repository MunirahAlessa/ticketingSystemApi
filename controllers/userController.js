const { User } = require("../models");

// Create a new user
async function createUser(req, res) {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Get a list of all users
async function getAllUsers(req, res) {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

// Get details of a specific user by ID
async function getUserById(req, res) {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

// Update user details
async function updateUser(req, res) {
  const { id } = req.params;
  try {
    const [updated] = await User.update(req.body, {
      where: { id },
    });
    if (updated) {
      const updatedUser = await User.findByPk(id);
      return res.json(updatedUser);
    }
    return res.status(404).json({ error: "User not found" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

// Delete a user
async function deleteUser(req, res) {
  const { id } = req.params;
  try {
    const deleted = await User.destroy({
      where: { id },
    });
    if (deleted) {
      return res.json({ message: "User deleted" });
    }
    return res.status(404).json({ error: "User not found" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
