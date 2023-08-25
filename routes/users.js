const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const userController = require("../controllers/userController");

// Create a new user
router.post("/", bodyParser.json(), userController.createUser);

// Get a list of all users
router.get("/", userController.getAllUsers);

// Get details of a specific user by ID
router.get("/:id", userController.getUserById);

// Update user details
router.put("/:id", bodyParser.json(), userController.updateUser);

// Delete a user
router.delete("/:id", userController.deleteUser);

module.exports = router;
