// * Creating Server */
const http = require("http");
const fs = require("fs");
const data = fs.readFileSync("./index.html", "utf-8");
// creating the server
const server = http.createServer((request, response) => {
  //! Doing Routing by using the Node JS
  const path = request.url;
  if (path === "/" || path.toLocaleLowerCase() === "/home") {
    response.writeHead(200, {
      "Content-Type": "text/html",
      "my-header": "Hello,World",
    });
    response.end(data.replace("{{%CONTENT%}}", "You are At Home Page"));
  } else if (path.toLocaleLowerCase() === "/about") {
    response.writeHead(200, {
      "Content-Type": "text/html",
      "my-header": "Hello World",
    });
    response.end(data.replace("{{%CONTENT%}}", "You are At About Page"));
  } else if (path.toLocaleLowerCase() === "/contact") {
    response.writeHead(200, {
      "Content-Type": "text/html",
      "my-header": "Hello World",
    });
    response.end(data.replace("{{%CONTENT%}}", "You are At Contact Page"));
  } else {
    response.writeHead(404);
    response.end(
      data.replace("{{%CONTENT%}}", "404 Error :Not Found any page ")
    );
  }
  // response.end(data);
  // console.log("New Request receivend");
});
server.listen(8000, "127.0.0.1", () => {
  console.log("Server Started");
});
