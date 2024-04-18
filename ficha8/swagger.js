const swaggerAutogen = require('swagger-autogen')()

const outputFile= './swagger_output.json'
const ednpointsFiles = ['./app.js']

swaggerAutogen(outputFile,ednpointsFiles)