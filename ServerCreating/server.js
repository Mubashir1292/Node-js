// * Creating Server */
const http = require("http");
const fs = require("fs");
const data = fs.readFileSync("./index.html", "utf-8");
// creating the server
const server = http.createServer((request, response) => {
  //! Doing Routing by using the Node JS
  const path = request.url;
  if (path === "/" || path.toLocaleLowerCase() === "/home") {
    response.end(data.replace("{{%CONTENT%}}", "You are at Home Page"));
  } else if (path.toLocaleLowerCase() === "/contact") {
    response.end(data.replace("{{%CONTENT%}}", "You are at Contact Page"));
  } else if (path.toLocaleLowerCase() === "/about") {
    response.end(data.replace("{{%CONTENT%}}", "You are at About Page"));
  } else {
    response.end(data.replace("{{%CONTENT%}}", "Error 404: Page Not Founded"));
  }

  // response.end(data);
  // console.log("New Request receivend");
});
server.listen(8000, "127.0.0.1", () => {
  console.log("Server Started");
});
