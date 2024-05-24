//console.log("node js started");
//! node runs the server not in the browser
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

//console.log("Node Server running");

// global variable instead of window object
//console.log(global);

// os means operating system
const os = require("os");

//console.log(os.type());
//console.log(os.version());
//console.log(os.homedir());
//console.log(os.platform());
//console.log(os.arch(), os.machine());
// console.log("Directory Name ::" + __dirname);
// console.log("File Name :: " + __filename.split("\\")[3]);
// path the Directory module
const path = require("path");
// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));

// my own module created called math which have some functions
const Math = require("./Math");
console.log(Math.giveMeRandomNumber());
