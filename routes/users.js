const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Create a new user
router.post("/", userController.createUser);

// Get a list of all users
router.get("/", userController.getAllUsers);

// Get details of a specific user by ID
router.get("/:id", userController.getUserById);

// Update user details
router.put("/:id", userController.updateUser);

// Delete a user
router.delete("/:id", userController.deleteUser);

module.exports = router;
