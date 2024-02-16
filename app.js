const http = require("http");
const routes = require("./routes");
const routeHandler = require("./routes");
function requestListener(request, response) {
  response.end();
}

var server = http.createServer(routes);
server.listen(5000);
//http://127.0.0.1:5000/

console.log("node.js server at port 4000");
