const http = require("http");
const fs = require("fs");
const server = http.createServer();

server.on("request", (req, res) => {
  console.log("new Request Founded");
  let rs = fs.createReadStream("./sample.txt");
  rs.pipe(res);
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server is on");
});
// console.log("nodemon is just started");
// console.log("checking the nodemon is working or not...");

//! nodemon and other things as well
console.log("Program is started");

//! Stored in second phase the IO task
fs.readFile("./sample.txt", "utf-8", (err, data) => {
  if (!err) {
    console.log("File read done");
  }
  //! stored in  first phase of the Event Loop
  setTimeout(() => {
    console.log("Timeout Function is Excuted");
  }, 0);
  //! Stored in Third phase of event loop Immediate phase
  setImmediate(() => {
    console.log("Set Immediate function is called");
  });
  process.nextTick(() => {
    console.log("Next Tick Process");
  });
});

console.log("Program is Ended");
