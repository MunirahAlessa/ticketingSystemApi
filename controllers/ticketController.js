// controllers/ticketController.js

const { Ticket } = require("../models");

// Create a new ticket
async function createTicket(req, res) {
  try {
    const ticket = await Ticket.create(req.body);
    res.status(201).json(ticket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Get a list of all tickets
async function getAllTickets(req, res) {
  try {
    const tickets = await Ticket.findAll();

    res.json(tickets);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

// Get details of a specific ticket by ID
async function getTicketById(req, res) {
  const { id } = req.params;
  try {
    const ticket = await Ticket.findByPk(id);
    if (!ticket) {
      return res.status(404).json({ error: "Ticket not found" });
    }
    res.json(ticket);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

// Update ticket detailsD
async function updateTicket(req, res) {
  const { id } = req.params;
  console.log(req);
  try {
    const [updated] = await Ticket.update(req.body, {
      where: {
        id: 1,
      },
    });
    console.log("updated: ", [updated]);
    console.log("req.body: ", req.body);

    if (updated) {
      const updatedTicket = await Ticket.findByPk(id);
      return res.json(updatedTicket);
    }
    return res.status(404).json({ error: "Ticket not found" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

// Delete a ticket
async function deleteTicket(req, res) {
  const { id } = req.params;
  try {
    const deleted = await Ticket.destroy({
      where: { id },
    });
    if (deleted) {
      return res.json({ message: "Ticket deleted" });
    }
    return res.status(404).json({ error: "Ticket not found" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  createTicket,
  getAllTickets,
  getTicketById,
  updateTicket,
  deleteTicket,
};
