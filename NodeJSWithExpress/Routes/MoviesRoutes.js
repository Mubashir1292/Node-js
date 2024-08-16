// import {
//   getAllMovies,
//   createNewMovie,
//   getMovieById,
//   DeleteMovieById,
// } from "../Controllers/MoviesController";
const express = require("express");
const router = express.Router();
const MoviesController = require("../Controllers/MoviesController");

router
  .route("/")
  .get(MoviesController.getAllMovies)
  .post(MoviesController.createNewMovie);
router
  .route("/:id")
  .get(MoviesController.getMovieById)
  .delete(MoviesController.DeleteMovieById);

//* exporting the routing using the module.exports
module.exports = router;
