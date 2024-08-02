const http = require("http");
const fs = require("fs");
const server = http.createServer();

server.on("request", (req, res) => {
  console.log("new Request Founded");
  let rs = fs.createReadStream("./sample.txt");
  rs.pipe(res);
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server is on");
});
console.log("nodemon is just started");
