const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "postgres", // Change this to your database dialect (e.g., 'mysql')
  username: "postgres", // Your database username
  password: "Q1234567", // Your database password
  host: "localhost", // Your database host
  port: 5432, // Your database port
  database: "ticketing_system_db", // Your database name
});

module.exports = sequelize;
