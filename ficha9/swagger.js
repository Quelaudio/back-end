const swaggerAutogen = require('swagger-autogen')()

const outputFile= './swagger_output.json'
const ednpointsFiles = ['./server.js']

swaggerAutogen(outputFile,ednpointsFiles)