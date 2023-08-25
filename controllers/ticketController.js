const { Ticket } = require("../models");

// Create a new ticket
async function createTicket(req, res) {
  try {
    const ticket = await Ticket.create(req.body);
    res
      .status(200)
      .json({ ticket, message: "Successfully created a new ticket" });
  } catch (error) {
    console.log("error: ", error);
    res.status(400).json({ error: "Bad request" });
  }
}

// Get a list of all tickets
async function getAllTickets(req, res) {
  try {
    const tickets = await Ticket.findAll();
    res.status(200).json(tickets);
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
    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

// Update ticket details
async function updateTicket(req, res) {
  const { id } = req.params;

  try {
    const [updated] = await Ticket.update(req.body, {
      where: { id },
    });

    if (updated) {
      const updatedTicket = await Ticket.findByPk(id);
      return res.status(200).json(updatedTicket);
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
      return res
        .status(200)
        .json({ message: "Successfully ticket has been deleted" });
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
