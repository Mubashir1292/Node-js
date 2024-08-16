const app = require("./App");
// creating the server
const port = 3000;
app.listen(port, (req, res) => {
  console.log("Server is listening on port " + port);
});
