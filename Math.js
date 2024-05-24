exports.giveMeRandomNumber = () => Math.floor(Math.random() * 99);

// create a function and just have to export it from
const randomFunction = () => {
  return Math.floor(Math.random() * 99);
};
//* export the function by using the following line:
//? module.exports = { randomFunction };
//* You can export the function by writing :
exports.randomFunction = () => Math.floor(Math.random() * 99);
