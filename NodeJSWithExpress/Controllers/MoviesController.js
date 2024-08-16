const fs = require("fs");
let movies = JSON.parse(fs.readFileSync("./data/movies.json"));
exports.getAllMovies = (req, res) => {
  res.status(200).json({
    status: "success",
    requestedAt: req.requestedAt,
    data: {
      movies: movies,
    },
  });
};
exports.createNewMovie = (req, res) => {
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
};
exports.getMovieById = (req, res) => {
  //* converting the id string to number by using the * 1
  const currentId = req.params.id * 1;

  let currentMovie = movies.find((movie) => movie.id === currentId);
  //   console.log(currentMovie);
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
};
exports.DeleteMovieById = (req, res) => {
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
};
