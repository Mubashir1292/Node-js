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

// ! there are three types of apis
//? static websites
//? dynamic websites
//? server side rendered websites (To Change the interval from the backend )
//* Node-JS can create both of the second , third type of websites like it can create the website with dynamically chainging
//* using the apis and server side rendered websites
//! now understanding the Rest Architecture
//* function name must be the noun not the verb like the Movies nor be getMovies
