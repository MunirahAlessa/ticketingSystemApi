const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "postgres",
  username: "postgres",
  password: "Q1234567",
  host: "localhost",
  port: 5432,
  database: "ticketing_system_db",
});

module.exports = sequelize;
