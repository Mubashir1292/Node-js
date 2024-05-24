// * writing the file using the fs.write

const fs = require("fs");
const path = require("path");

const data = "This is a Text File...";

fs.writeFile(path.join(__dirname, "", "reply.txt"), data, (err) => {
  if (err) console.log(err);
  console.log("Write Complete");
});
process.on("uncaughtException", (err) => {
  console.log(`There was an Exception : ${err}`);
  process.exit;
});
