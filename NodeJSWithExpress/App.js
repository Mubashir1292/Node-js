const express = require("express");
const fs = require("fs");
const morgan = require("morgan");
let app = express();
//! middle-ware which we use for the
app.use(express.json());

const moviesRouter = require("./Routes/MoviesRoutes");

const logger = (req, res, next) => {
  console.log("Custom Middleware Crossed");
  next();
};
app.use(logger);

app.use(morgan("dev"));
app.use((req, res, next) => {
  req.requestedAt = new Date().toISOString();
  next();
});

const UpdateMovieById = (req, res) => {
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
};

//   const newId = req.params.id * 1;
//   const movie = movies.find((m) => m.id === newId);
//   if (!movie) {
//     res.status(404).json({
//       status: "fail",
//       message: `Not Founded any Movie at ${newId}`,
//     });
//   } else {
//     const index = movies.indexOf(movie);
//     movies.splice(index, 1);
//     fs.writeFile("./data/movies.json", JSON.stringify(movies), (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.status(204).json({
//           status: "success",
//           movie: null,
//         });
//       }
//     });
//   }
// };
//! Creating my first api for /Movies by following the REST Architecture as well
//? Reading the file movies.json

let movies = JSON.parse(fs.readFileSync("./data/movies.json"));

app.get("/api/v2/movies", (req, res) => {
  res.status(200).json({
    status: "success",
    count: movies.length,
    data: {
      movies: movies,
    },
  });
});

app.route("/api/v1/movieswithparams/:id").patch(UpdateMovieById);

//   res.status(200).send({
//     status: "success",
//     message: "Data is Posted",
//   });
// });

//! Route Parameters with Id Examples as well

//! Updating the existing product using the PUT or Patch api method...
//* to Update any instance we have to PUT || Patch method...
//? Difference
// * Put Method is updating the complete object like the Complete Movies object
// * Patch Method is updating the single line of key pair value if we have to update...

//! Delete Method for deleting the movie from Movies.json
app.use("/api/v1/movies", moviesRouter);
module.exports = app;
