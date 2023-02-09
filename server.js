const http = require("http");
const fs = require("fs");

const server = http.createServer(function(req, res) {
  data="<h1>Puto el que lo lea :v</h1>"
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(data);
  res.end();
  
});

server.listen(3000);
