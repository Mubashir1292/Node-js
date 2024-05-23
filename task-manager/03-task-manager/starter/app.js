// * setting the server up and done the changes at my best...
const express = require("express");
const app = express();
const giveMeBackNumbersList = () => {
  let numbers = [];
  for (let i = 0; i < 100; i++) {
    let randomNumber = Math.floor(Math.random() * 99);
    numbers[i] = randomNumber;
  }
  return numbers;
};
app.listen(3000, console.log("server gone started"));
app.get("/hello", (req, res) => {
  res.send("Management App \n" + giveMeBackNumbersList());
});
