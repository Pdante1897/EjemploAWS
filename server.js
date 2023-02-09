const http = require("http");
const fs = require("fs");

const server = http.createServer(function(req, res) {
  data="XD"
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(data);
  res.end();
  
});

server.listen(3000);
