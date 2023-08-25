// routes/tickets.js

const express = require("express");
const router = express.Router();
const ticketController = require("../controllers/ticketController");
const bodyParser = require("body-parser");

// Create a new ticket
router.post("/", bodyParser.json(), ticketController.createTicket);

// Get a list of all tickets
router.get("/", ticketController.getAllTickets);

// Get details of a specific ticket by ID
router.get("/:id", ticketController.getTicketById);

// Update ticket details
router.put("/:id", bodyParser.json(), ticketController.updateTicket);

// Delete a ticket
router.delete("/:id", ticketController.deleteTicket);

module.exports = router;
