var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var buffer = new Buffer(100);
buffer = fs.readFileSync('index.html');
var hel_world = buffer.toString();
app.get('/', function(request, response) {
  response.send(hel_world);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});