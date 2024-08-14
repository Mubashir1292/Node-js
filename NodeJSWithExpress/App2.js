//! Creating the Get Api
const express = require("express");
const App = express();
const fs = require("fs");
//! middle-ware for the Posting the data
App.use(express.json());

//! Creating the server
let port = 3000;
App.listen(port, (req, res) => {
  console.log("Server is on & Listening on port " + port);
});

//? Reading the File of the Movies
let movies = JSON.parse(fs.readFileSync("./data/movies.json"));
//* Get Api for All Movies Getting & Testing
App.get("/api/v3/movies", (req, res) => {
  res.status(200).json({
    status: "success",
    count: movies.length,
    data: {
      movies: movies,
    },
  });
});
//! Posting Request for Posting the New Movie
App.post("/api/v3/movie", (req, res) => {
  let newId = movies[movies.length - 1].id + 1;
  const newMovie = Object.assign({ id: newId }, req.body);
  movies.push(newMovie);
  fs.writeFile("./data/movies.json", JSON.stringify(movies), (err, data) => {
    if (err) console.log(err);
    res.status(201).json({
      status: "success",
      data: {
        movies: movies,
      },
    });
  });

  //   res.send("Creating");
  //  movies.push(NewMovie);

  //   fs.writeFile("./data/movies.json", JSON.stringify(movies), (err, data) => {});
  //   res.status(201).json({
  //     status: "success",
  //     data: {
  //       movies: movies,
  //     },
  //   });
});
//! getting the Movie of the Api by giving the id
App.get("/api/v2/moviewithreferenceId/:id", (req, res) => {
  //* failed to parse the string to int...
  const id = req.params.id * 1;

  const moviefinding = movies.find((movie) => movie.id === id);
  if (!moviefinding) {
    res.status(404).json({
      status: "fail",
      data: {
        message: `Not founded any movie at id ${id}`,
      },
    });
  } else {
    res.status(200).json({
      status: "success",
      data: {
        movie: moviefinding,
      },
    });
  }
});
