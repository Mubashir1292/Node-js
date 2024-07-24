/** ******   Reading and Writing file   ***/
//console.log("Read and Write files");
const fs = require("fs");
// const content = `\nNew Data is Written to new File ${
//   new Date().toISOString().split("T")[0]
// }`;

fs.readFile("./NewFiles/lorem.txt", "utf-8", (err, data) => {
  fs.readFile(`./NewFiles/${data}.txt`, "utf-8", (err1, data1) => {
    fs.readFile(`./NewFiles/${data1}.txt`, "utf-8", (err2, data2) => {
      fs.writeFile(
        "./NewFiles/NewlyWritten.txt",
        `${data2},${data1},${data}\n\n Date Created.. ${
          new Date().toISOString().split("T")[0]
        }`,
        () => {
          console.log("File Written");
        }
      );
    });
  });
});
console.log("Reading File");
