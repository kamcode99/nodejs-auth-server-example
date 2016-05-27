//**** Main Starting point of the application ****
// http is the native node library
const http = require('http');
const express = require('express');

// BodyParser is a middleware which is used
// to parse the incomming request specifically
// it parse the request into json.
const bodyParser = require('body-parser');
// Morgan is a logging framework and a middleware
// Which is basically used for debugging.
const morgan = require('morgan');
const router = require('./router');

// Create an express Application
const app = express();
router(app);

//**** Application Setup ****
// Both morgan and bodyParser are middleware in express
// So any incomming request will be passed into morgan
// and also to bodyParser.'app.use' is used to register
// morgan and bodyParser as middleware.
app.use(morgan('combined'));
// 'type: */*' says that parse every incomming request
// into json irrespectiveof the request type.
app.use(bodyParser.json({type: '*/*'}));
//**** Server Setup ****
// If there is an environment variable named PORT
// use that, otherwise use port 8080
const port = process.env.PORT || 8080
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
