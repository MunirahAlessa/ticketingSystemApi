const { User } = require("../models");

async function createUser(req, res) {
  try {
    const user = await User.create(req.body);
    res.status(200).json({ user, message: "Successfully created a new user" });
  } catch (error) {
    console.log("error: ", error);
    res.status(400).json({ error: "Bad request" });
  }
}

// Get a list of all users
async function getAllUsers(req, res) {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
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
    res.status(200).json(user);
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
      return res.status(200).json(updatedUser);
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
      return res
        .status(200)
        .json({ message: "Successfully user has been deleted" });
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
