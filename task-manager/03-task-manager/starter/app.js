//! setting-up the server where the server will listen at the port of 3000
const express = require("express");
const app = express();

//* routes setting and handling the new pages
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

const port = 3001;
app.listen(port, console.log("app"));
