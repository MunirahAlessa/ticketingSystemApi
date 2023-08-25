const swaggerJSDoc = require("swagger-jsdoc");

// Swagger definition
const swaggerDefinition = {
  info: {
    title: "Tickting System",
    version: "1.0.0",
    description: "API description",
  },
  basePath: "/",
};

// Options for the swagger-jsdoc
const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"],
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
