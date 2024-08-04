//import package
const express = require("express");
let app = express();

//Route = HTTP Method + URL
app.get("/", (req, res) => {
  //   res.status(200).send(`<h4>you are at the home place</h4>`);
  res.status(200).json({ message: "Hello World", status: 200 });
});
app.post("/", () => {});
app.get("/404", (req, res) => {
  res.status(404).send("Error 404:Page not founded");
});

//create a server
const port = 3000;
app.listen(port, () => {
  console.log("Server On hai...");
});
