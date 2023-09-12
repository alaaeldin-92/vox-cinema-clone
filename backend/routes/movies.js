const express = require("express");
const {
  getMovies,
  getMovie,
  createMovie,
  uploadMovieCover,
  deleteMovie,
  updateMovie,
} = require("../controllers/movieController");

const router = express.Router();

// GET all movies
router.get("/", getMovies);

// GET a single movie
router.get("/:id", getMovie);

// POST a new movie
router.post("/", createMovie);

// UPLOAD a new movie cover image
router.post("/upload", uploadMovieCover);

// DELETE a movie
router.delete("/:id", deleteMovie);

// UPDATE a movie
router.patch("/:id", updateMovie);

module.exports = router;
