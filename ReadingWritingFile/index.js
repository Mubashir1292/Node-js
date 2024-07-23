/** ******   Reading and Writing file   ***/
//console.log("Read and Write files");
const fs = require("fs");
const previousData = fs.readFileSync("./NewFiles/lorem.txt", "utf-8");
const content = `${previousData}\nNew Data is Written to new File ${
  new Date().toISOString().split("T")[0]
}`;
fs.writeFileSync("./NewFiles/lorem.txt", content, "utf-8");
