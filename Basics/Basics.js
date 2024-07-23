//! creating the interface for the Reading and Writing the Questions and Answers
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
var myNickName;
rl.question("What is your nick Name:", (name) => {
  console.log(name);
  myNickName = name;
  rl.close();
});
rl.on("close", () => {
  console.log("interface Closed " + myNickName);
  process.exit(0);
});
