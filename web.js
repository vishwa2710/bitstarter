var express = require('express');

var app = express.createServer(express.logger());
var buffer = new Buffer(100);
buffer = fs.readFileSync(index.html);
var hel_world = buffer.toStrong();
app.get('/', function(request, response) {
  response.send(hel_world);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});