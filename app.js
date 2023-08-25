const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("./swagger/swagger");
const swaggerDocument = require("./swagger/swagger.json");

// Use Swagger UI Express for API documentation
const morgan = require("morgan");
const db = require("./db");

// Import and use the routes
const ticketRoutes = require("./routes/tickets");
const userRoutes = require("./routes/users");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc));
app.use("/api/tickets", ticketRoutes);
app.use("/api/users", userRoutes);
app.use(morgan("dev"));

app.use(express.json());
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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
