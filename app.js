const express = require("express");
const app = express();
const morgan = require("morgan");
const db = require("./db");

// Import and use your routes
const ticketRoutes = require("./routes/tickets");
const userRoutes = require("./routes/users");

app.use("/api/tickets", ticketRoutes);
app.use("/api/users", userRoutes);
app.use(morgan("dev"));

app.use(express.json());

db.sync()
  .then(() => {
    console.log("Database is synced.");
    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error syncing the database");
  });
