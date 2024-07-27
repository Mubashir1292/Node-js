//! reading file
const fs = require("fs");
const http = require("http");
const products = JSON.parse(fs.readFileSync("./data/Products.json", "utf-8"));
const productListHTML = fs.readFileSync("./data/ProductList.html", "utf-8");
const productsArray = products.map((prod, index) => {
  let outputProduct = productListHTML.replace("{{%NAME%}}", prod.name);
  outputProduct = outputProduct.replace("{{%MODELNAME%}}", prod.modaName);
  outputProduct = outputProduct.replace("{{%MODELNO%}}", prod.modelNumber);
  outputProduct = outputProduct.replace("{{%SIZE%}}", prod.size);
  outputProduct = outputProduct.replace("{{%CAMERA%}}", prod.camera);
  outputProduct = outputProduct.replace("{{%PRICE%}}", prod.price);
  outputProduct = outputProduct.replace("{{%COLOR%}}", prod.color);
  outputProduct = outputProduct.replace("{{%IMAGE%}}", prod.productImage);
  outputProduct = outputProduct.replace("{{%ID%}}", prod.id);
  return outputProduct;
});
//* creating server
const server = http.createServer((request, response) => {
  console.log("new Request is founded");
  const IndexPage = fs.readFileSync("./index.html", "utf-8");
  const path = request.url;
  if (path === "/" || path.toLocaleLowerCase() === "/home") {
    response.writeHead(200, {
      "Content-Type": "text/html",
      "my-header": "Mubashir Liaqat",
    });
    response.end(IndexPage.replace("{{%CONTENT%}}", "You are at Home Page"));
  } else if (path.toLocaleLowerCase() === "/about") {
    response.writeHead(200, {
      "Content-Type": "text/html",
    });
    response.end(
      IndexPage.replace("{{%CONTENT%}}", "You are at the About Page")
    );
  } else if (path.toLocaleLowerCase() === "/products") {
    response.writeHead(200, {
      "Content-Type": "text/html",
    });
    response.end(IndexPage.replace("{{%CONTENT%}}", productsArray.join(",")));
  } else {
    response.writeHead(404);
    response.end("404 Error:Page not found");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("server is On");
});
