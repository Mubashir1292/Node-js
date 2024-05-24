// * writing the file using the fs.write

//? checking the promises

const fs = require("fs");
const path = require("path");
const dataToWrite = "Test Writing on to the File";

fs.writeFile(
  path.join(__dirname, "", "testWriting.txt"),
  dataToWrite,
  (err) => {
    if (err) console.log(err);
  },
  console.log("write complete"),

  fs.rename(
    path.join(__dirname, "", "reply.txt"),
    path.join(__dirname, "", "Testing.txt"),
    (err) => {
      if (err) console.log(err);
      console.log("Rename Completed");
    }
  )
);

// //? checking whether the error occured
process.on("uncaughtException", (err) => {
  console.log(`There was an Exception about ${err}`);
});
