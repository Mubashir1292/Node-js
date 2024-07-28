const http = require("http");
const fs = require("fs");
const url = require("url");
const products = JSON.parse(fs.readFileSync("./data/Products.json", "utf-8"));
//console.log(products);
//! getting the productsList html file by reading
const ProductListHTML = fs.readFileSync("./data/ProductList.html", "utf-8");
//* sending the file data to the Product List
let ProductsArray = products.map((prod, index) => {
  let output = ProductListHTML.replace("{{%NAME%}}", prod.name);
  output = output.replace("{{%MODELNAME%}}", prod.modeName);
  output = output.replace("{{%MODELNO%}}", prod.modelNumber);
  output = output.replace("{{%SIZE%}}", prod.size);
  output = output.replace("{{%CAMERA%}}", prod.camera);
  output = output.replace("{{%PRICE%}}", prod.price);
  output = output.replace("{{%COLOR%}}", prod.color);
  output = output.replace("{{%IMAGE%}}", prod.productImage);
  output = output.replace("{{%ID%}}", prod.id);
  return output;
});
// creating server
const server = http.createServer((request, response) => {
  console.log("new Request Founded");
  const data = fs.readFileSync("./index.html", "utf-8");
  let { query, pathname: path } = url.parse(request.url, true);
  console.log(query);
  if (path === "/" || path.toLocaleLowerCase() === "/home") {
    response.writeHead(200, {
      "Content-Type": "text/html",
    });
    response.end(data.replace("{{%CONTENT%}}", ProductsArray.join(",")));
  } else if (path.toLocaleLowerCase() === "/about") {
    response.writeHead(200, {
      "Content-Type": "text/html",
      "my-header": "Mubashir Liaqat",
    });
    response.end(data.replace("{{%CONTENT%}}", "You are at the About Page"));
  } else if (path.toLocaleLowerCase() === "/products") {
    if (!query.id) {
      response.writeHead(200, {
        "Content-Type": "text/html",
      });
      response.end(data.replace("{{%CONTENT%}}", ProductsArray.join(",")));
    } else {
      response.end("This is product with ID + " + query.id);
    }
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
