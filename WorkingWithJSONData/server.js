const http = require("http");
const fs = require("fs");
const products = fs.readFileSync("./data/Products.json", "utf-8");
// creating server
const server = http.createServer((request, response) => {
  console.log("new Request Founded");
  const data = fs.readFileSync("./index.html", "utf-8");
  const path = request.url;
  if (path === "/" || path.toLocaleLowerCase() === "/home") {
    response.writeHead(200, {
      "Content-Type": "text/html",
      "my-header": "Mubashir Liaqat",
    });
    response.end(data.replace("{{%CONTENT%}}", "You are at the Home place"));
  } else if (path.toLocaleLowerCase() === "/about") {
    response.writeHead(200, {
      "Content-Type": "text/html",
      "my-header": "Mubashir Liaqat",
    });
    response.end(data.replace("{{%CONTENT%}}", "You are at the About Page"));
  } else if (path.toLocaleLowerCase() === "/products") {
    response.writeHead(200, {
      "Content-Type": "application/json",
    });
    response.end("You are at the Products page");
    console.log(products);
  } else {
    response.writeHead(404);
    response.end(
      data.replace("{{%CONTENT%}}", "404 Error : You are at the Wronge place")
    );
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("Server on Now...");
});
