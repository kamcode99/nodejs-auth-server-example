var http = require('http');
var server = http.createServer(function(request, response){
  console.log("Request Received");
  response.write("Hello there!");
  response.end();
});

server.listen(8080);

// Simplest node server using http module
// listening on port 8080
// Run the application using 'node .' commmand
// Goto the browser and access the following url
// localhost:8080
// You will see console log 'Request Received'
// And in the browser you will see 'Hello World!'
