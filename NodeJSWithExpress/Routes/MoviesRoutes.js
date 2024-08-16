// import {
//   getAllMovies,
//   createNewMovie,
//   getMovieById,
//   DeleteMovieById,
// } from "../Controllers/MoviesController";
const express = require("express");
const router = express.Router();
const MoviesController = require("../Controllers/MoviesController");
//Todo Creating Param Middleware
//* i am creating this middleware for those routes which have any value of id parameter
router.param("id", (req, res, next, value) => {
  console.log("Movie Id is " + value);
  next();
});
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
