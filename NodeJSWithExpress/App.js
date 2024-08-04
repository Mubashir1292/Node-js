//import package
const express = require("express");
let app = express();

//! Route = http-Method + URl
//? Sending the response
app.get("/", (req, res) => {
  //res.status(200).send("You are at the HOME PAGE");
  res.status(200).json({ name: "Mubashir Liaqat", age: 21 });
});
//? sending the json response
app.get("/", (req, res) => {});
// creating the server
const port = 3000;
app.listen(port, (req, res) => {
  console.log("Server is listening");
});

//! front-end and back-end
//? front-end uses the html,css,js to create ui
//? backend works with the database , manipulates the data and interact with frontend using apis
