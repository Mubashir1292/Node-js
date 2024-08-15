//import package
const express = require("express");
let app = express();
//! middle-ware which we use for the
app.use(express.json());

//! Route = http-Method + URl
// //? Sending the response
// app.get("/", (req, res) => {
//   //res.status(200).send("You are at the HOME PAGE");
//   res.status(200).json({ name: "Mubashir Liaqat", age: 21 });
// });
//? sending the json response
// creating the server
const port = 3000;
app.listen(port, (req, res) => {
  console.log("Server is listening on port " + port);
});

//! front-end and back-end
//? front-end uses the html,css,js to create ui
//? backend works with the database , manipulates the data and interact with frontend using apis

// ! there are three types of apis
//? static websites
//? dynamic websites
//? server side rendered websites (To Change the interval from the backend )
//* Node-JS can create both of the second , third type of websites like it can create the website with dynamically chainging
//* using the apis and server side rendered websites
//! now understanding the Rest Architecture
//* function name must be the noun not the verb like the Movies nor be getMovies

//! Creating my first api for /Movies by following the REST Architecture as well
//? Reading the file movies.json
const fs = require("fs");
let movies = JSON.parse(fs.readFileSync("./data/movies.json"));
// console.log(movies);
// * /api/movies/v1/
app.get("/api/v1/movies", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      movies: movies,
    },
  });
});
app.get("/api/v2/movies", (req, res) => {
  res.status(200).json({
    status: "success",
    count: movies.length,
    data: {
      movies: movies,
    },
  });
});

//! Api Posting using the Node JS and writing the data to the file...

app.post("/api/v1/movie", (req, res) => {
  //* Creating the new Api using the previous List of movies object
  const newMovieId = movies[movies.length - 1].id + 1;
  const newMovie = Object.assign({ id: newMovieId }, req.body);
  movies.push(newMovie);
  fs.writeFile("./data/movies.json", JSON.stringify(movies), (err, data) => {
    if (err) console.log(err);
    res.status(201).json({
      status: "success",
      data: {
        movie: newMovie,
      },
    });
  });
  // fs.writeFile("./movies.json", newMovie, (err, data) => {
  //   if (err) console.log(err);
  // });
  //res.send("Created");
});

// app.post("/api/v1/1/movie", (req, res) => {
//   res.status(200).send({
//     status: "success",
//     message: "Data is Posted",
//   });
// });

//! Route Parameters with Id Examples as well
app.get("/api/v1/movieswithparams/:id", (req, res) => {
  //* converting the id string to number by using the * 1
  const currentId = req.params.id * 1;

  let currentMovie = movies.find((movie) => movie.id === currentId);
  console.log(currentMovie);
  if (!currentMovie) {
    res.status(404).json({
      status: "fail",
      message: "Movie Not Founded on id " + currentId,
    });
  } else {
    res.status(200).json({
      status: "success",
      data: {
        movie: currentMovie,
      },
    });
  }
  //res.send("Test Params");
});

//! Updating the existing product using the PUT or Patch api method...
//* to Update any instance we have to PUT || Patch method...
//? Difference
// * Put Method is updating the complete object like the Complete Movies object
// * Patch Method is updating the single line of key pair value if we have to update...
app.patch("/api/v1/movies/:id", (req, res) => {
  const newId = req.params.id * 1;
  //* finding the Movie
  const movie = movies.find((m) => m.id === newId);
  if (!movie) {
    res.status(404).json({
      status: "fail",
      message: "Movie not founded at id " + newId,
    });
  } else {
    // * finding the index of the founded movie to update its other elements
    const index = movies.indexOf(movie);
    //* updating the movie with name
    Object.assign(movie, req.body);
    movies[index] = movie;

    //* writing to the file like after successfully updating the movie
    fs.writeFile("./data/movies.json", JSON.stringify(movies), (err) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({
          status: "success",
          data: {
            movie: movie,
          },
        });
      }
    });
  }
});

//! Delete Method for deleting the movie from Movies.json
app.delete("/api/delete/v1/movies/:id", (req, res) => {
  const newId = req.params.id * 1;
  const movie = movies.find((m) => m.id === newId);
  if (!movie) {
    res.status(404).json({
      status: "fail",
      message: `Not Founded any Movie at ${newId}`,
    });
  } else {
    const index = movies.indexOf(movie);
    movies.splice(index, 1);
    fs.writeFile("./data/movies.json", JSON.stringify(movies), (err) => {
      if (err) {
        console.log(err);
      } else {
        res.status(204).json({
          status: "success",
          movie: null,
        });
      }
    });
  }
});
