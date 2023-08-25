# Ticketing System Api

# Overview
This documentation provides an overview of the Ticketing System API, a Node.js-based API for a simple ticketing system. This API is built using Node.js, Express.js, and Sequelize for database connectivity.

# Project Structure
```shell
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
├── app.js
├── index.js
├── package.json
└── README.md
```

# Getting Started

1- Clone the repository from GitHub:
```shell
git clone https://github.com/your-username/ticketingsystemapis.git
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

