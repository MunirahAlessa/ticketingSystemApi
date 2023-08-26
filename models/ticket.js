"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    static associate(models) {
      // Define the association here
      Ticket.belongsTo(models.User, {
        foreignKey: "assigned_to",
        as: "assignee",
      });
    }
  }
  Ticket.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // This will make the "id" field auto-incrementing
      },
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      status: DataTypes.STRING,
      assigned_to: DataTypes.STRING,
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW, // Set the default value to the current timestamp
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW, // Set the default value to the current timestamp
      },
    },
    {
      sequelize,
      modelName: "Ticket",
      tableName: "ticket",
      timestamps: false,
    }
  );
  return Ticket;
};
