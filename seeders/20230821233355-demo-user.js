"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "user",
      [
        {
          id: 1,
          name: "user1",
          email: "user1@test.com",
          role: "admin",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: "user2",
          email: "user2@test.com",
          role: "user",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          name: "user3",
          email: "user3@test.com",
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
          title: "ticket 1",
          status: "active",
          description: "this is ticket1",
          assigned_to: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          title: "ticket 2",
          status: "active",
          description: "this is ticket2",
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
