const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("What is Your Age?", (age) => {
  console.log("You Entered :" + age);
  rl.close();
});
rl.on("close", () => {
  console.log("Interface Ended");
  process.exit(0);
});
