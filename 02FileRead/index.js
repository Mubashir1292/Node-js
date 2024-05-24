const fs = require("fs");
const path = require("path");
fs.readFile(path.join(__dirname, "", "starter.txt"), "utf8", (err, data) => {
  if (err) {
    console.log(`Error reading file :${err.message}`);
    return;
  }
  if (data) console.log(data);
});
console.log("Hello...");
//? we have to read file
/// checking the process errors
process.on("uncaughtException", (err) => {
  console.log(`There was an exception ${err}`);
});
