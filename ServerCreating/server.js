// * Creating Server */
const http = require("http");
const fs = require("fs");
const data = fs.readFileSync("./index.html", "utf-8");
// creating the server
const server = http.createServer((request, response) => {
  response.end(data);
  console.log("New Request receivend");
});
server.listen(8000, "127.0.0.1", () => {
  console.log("Server Started");
});
