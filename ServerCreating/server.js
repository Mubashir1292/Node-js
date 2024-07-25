// * Creating Server */
const http = require("http");
// const fs = require("fs");
//const data = fs.readFileSync("./index.html", "utf-8");
// creating the server
const server = http.createServer((request, response) => {
  //! Doing Routing by using the Node JS
  const path = request.url;
  if (path === "/" || path.toLocaleLowerCase() === "/home") {
    response.end("You are at the home page");
  } else if (path.toLocaleLowerCase() === "/about") {
    response.end("You are at the About Page");
  } else {
    response.end("404 Error: Page Not Founded");
  }

  // response.end(data);
  // console.log("New Request receivend");
});
server.listen(8000, "127.0.0.1", () => {
  console.log("Server Started");
});
