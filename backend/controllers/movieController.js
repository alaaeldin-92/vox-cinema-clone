const Movie = require("../models/movieModel");
const mongoose = require("mongoose");
const fs = require("fs");

// get all movies
const getMovies = async (req, res) => {
  const movies = await Movie.find({}).sort({ createdAt: -1 });

  res.status(200).json(movies);
};

// get a single movie
const getMovie = async (req, res) => {
  const { id } = req.params;

  // if (!mongoose.Types.ObjectId.isValid(id)) {
  //   return res.status(404).json({ error: "No such movie" });
  // }

  const movie = await Movie.find({ nameId: id });

  if (!movie) {
    return res.status(404).json({ error: "No such movie" });
  }

  res.status(200).json(movie);
};

// create a new movie
const createMovie = async (req, res) => {
  const {
    nameId,
    title,
    releaseDate,
    runningTime,
    genres,
    starring,
    cover_url,
    yt_url,
    pg,
    language,
    description,
  } = req.body;
  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!releaseDate.value) {
    emptyFields.push("releaseDate");
  }
  if (!runningTime) {
    emptyFields.push("runningTime");
  }
  if (!starring) {
    emptyFields.push("starring");
  }
  if (!genres) {
    emptyFields.push("genres");
  }
  if (!cover_url) {
    emptyFields.push("avatar");
  }
  if (!yt_url) {
    emptyFields.push("yt_url");
  }
  if (!pg) {
    emptyFields.push("pg");
  }
  if (!language) {
    emptyFields.push("language");
  }
  if (!description) {
    emptyFields.push("description");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyFields });
  } else {
    const movie = await Movie.create({
      nameId,
      title,
      releaseDate,
      runningTime,
      cover_url,
      yt_url,
      pg,
      language,
      description,
      genres,
      starring,
    });
    res.status(200).json({ movie });
  }
};

// upload a new movie cover image
const uploadMovieCover = async (req, res) => {
  let emptyFields = [];
  if (req.files) {
    const { avatar } = req.files;

    fs.exists("../frontend/public/assets/" + avatar.name, (e) => {
      if (!e) {
        console.log("doesnt exist!");
        avatar.mv("../frontend/public/assets/" + avatar.name);
      }
    });
    res.status(200).json({ fileName: avatar.name });
  } else {
    emptyFields.push("avatar");
    return res
      .status(400)
      .json({ error: "Please upload a cover photo.", emptyFields });
  }
};

// delete a movie
const deleteMovie = async (req, res) => {
  const { id } = req.params;

  // if (!mongoose.Types.ObjectId.isValid(id)) {
  //   return res.status(400).json({ error: "No such movie" });
  // }

  const movie = await Movie.findOneAndDelete({ nameId: id });

  if (!movie) {
    return res.status(400).json({ error: "No such movie" });
  }

  res.status(200).json(movie);
};

// update a movie
const updateMovie = async (req, res) => {
  const { id } = req.params;

  // if (!mongoose.Types.ObjectId.isValid(id)) {
  //   return res.status(400).json({ error: "No such movie" });
  // }

  const movie = await Movie.findOneAndUpdate(
    { nameId: id },
    {
      ...req.body,
    }
  );

  if (!movie) {
    return res.status(400).json({ error: "No such movie" });
  }

  res.status(200).json(movie);
};

module.exports = {
  getMovies,
  getMovie,
  createMovie,
  uploadMovieCover,
  deleteMovie,
  updateMovie,
};
