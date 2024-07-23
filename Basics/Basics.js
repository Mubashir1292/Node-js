//! creating the interface for the Reading and Writing the Questions and Answers
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("What is your nick Name:", (name) => {
  console.log(name);
  rl.close();
});
