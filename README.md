# Ticketing System Api

# Overview
This documentation provides an overview of the Ticketing System API, a Node.js-based API for a simple ticketing system. This API is built using Node.js, Express.js, and Sequelize for database connectivity.
# Frameworks
In my choice of Express.js as the foundational framework and Sequelize as the database ORM for our ticketing system, I've considered key factors:
- **Ease of Use**: Express.js offers a user-friendly, minimalist design, while Sequelize provides an intuitive way to interact with our database. Together, they streamline development.

- **Flexibility**: Express.js's minimalism complements Sequelize's flexibility in defining database models and relationships, ensuring adaptability to our evolving needs.

- **Documentation**: Both Express.js and Sequelize offer extensive, well-documented resources, reducing the learning curve and expediting development and issue resolution.

- **Compatibility**: Express.js's platform-agnostic nature and Sequelize's database compatibility ensure our system is portable and adaptable across various environments, enhancing resilience and scalability.
This combination aligns perfectly with my vision for the success and longevity of our ticketing system project.

# Prerequisites
```
- Node js 
- Npm 
- Docker
```

# Project Structure
```
ticketingsystemapis/
├── config/
│   └── config.json
├── controllers/
│   ├── ticketController.js
│   └── userController.js
├── migrations/
│   └── ...
├── models/
│   ├── index.js
│   ├── ticket.js
│   └── user.js
├── routes/
│   ├── ticketRoutes.js
│   └── userRoutes.js
├── seeders/
│   └── ...
├── swagger/
│   ├── swagger.js
│   └── swagger.json
├── app.js
├── index.js
├── package.json
└── README.md
```

# Getting Started

1- Clone the repository from GitHub:
```shell
git clone https://github.com/MunirahAlessa/ticketingsystemapis.git
```
2- Install the project dependencies:
```shell
cd ticketingsystemapis
npm install
```
3- Use Docker Compose to setup the datbase 
```shell
docker-compose up
```

4- Run database migrations to create the necessary tables:
```shell
npm run migrate
```

5-Seed the database with initial data:
```shell
npm run make-seed
npm run seed
```
6-Start the API server:
```shell
npm start
```
Now, the API should be running locally and accessible at http://localhost:3000

# API Endpoints
The Ticketing System API provides the following endpoints:

```
GET /api/tickets: Get a list of all tickets.
GET /api/tickets/:id: Get details of a specific ticket by ID.
POST /api/tickets: Create a new ticket.
PUT /api/tickets/:id: Update an existing ticket by ID.
DELETE /api/tickets/:id: Delete a ticket by ID.
```

For user-related operations:
```
GET /api/users: Get a list of all users.
GET /api/users/:id: Get details of a specific user by ID.
POST /api/users: Create a new user.
PUT /api/users/:id: Update an existing user by ID.
DELETE /api/users/:id: Delete a user by ID.
```

or you can navigate to http://localhost:3000/doc to view swagger Api documentation


# Database Schema
The API uses Sequelize to interact with the database. Here is the database schema:

User:
```
id (Primary Key)
name
role
```
Ticket:
```
id (Primary Key)
title
description
status
assigned_to (Foreign Key to User)
```


