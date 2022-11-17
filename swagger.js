const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Classic To Do App API',
    description: 'API that allows for a classic To Do App front end.',
  },
  host: 'localhost:8080',
  schemes: ['http'],
};

const outputFile = 'swagger-output.json';
const endpointsFiles = ['server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
