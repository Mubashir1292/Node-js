// * setting the server up and done the changes at my best...
const express = require("express");
const app = express();
app.listen(3000, console.log("server gone started"));
app.get("/hello", (req, res) => {
  res.send("Management App");
});
