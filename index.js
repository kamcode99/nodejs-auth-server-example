//**** Main Starting point of the application ****
// http is the native node library
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

//**** Application Setup ****



//**** Server Setup ****
// If there is an environment variable named PORT
// use that, otherwise use port 8080
const port = process.env.PORT || 8080
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
