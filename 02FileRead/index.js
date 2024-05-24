const fs = require("fs");
fs.readFile("../02FileRead/starter.txt", (err, data) => {
  err && console.log(err);
  data && console.log(data.toString());
});
//! we have to read file
