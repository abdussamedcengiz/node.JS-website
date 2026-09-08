const http = require("http");
const routeHandler = require("./routes");

const PORT = process.env.PORT || 5000;

const server = http.createServer(routeHandler);

server.listen(PORT, function () {
  console.log(`http://localhost:${PORT} adresinde calisiyor`);
});
