"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "user",
      [
        {
          id: 1,
          name: "John Doe",
          email: "john.doe@example.com",
          role: "admin",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: "Alice Smith",
          email: "alice.smith@example.com",
          role: "user",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          name: "Bob Johnson",
          email: "bob.johnson@example.com",
          role: "user",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "ticket",
      [
        {
          id: 1,
          title: "Bug Report",
          status: "open",
          description: "I found a bug in the system.",
          assigned_to: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          title: "Feature Request",
          status: "open",
          description: "I have a suggestion for a new feature.",
          assigned_to: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user", null, bulkDeleteOptions);
    await queryInterface.bulkDelete("ticket", null, bulkDeleteOptions);
  },
};
