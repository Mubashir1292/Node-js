const fs = require("fs");

const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
  console.log("New Request Founded");
  if (req.url === "/" || req.url.toLocaleLowerCase() === "/home") {
    fs.readFile("./sample.txt", "utf-8", (err, data) => {
      if (err) {
        res.end("Something went wronge");
        return;
      }
      res.end(data);
      console.log("Reading data");
    });
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("Server is On Now");
});
