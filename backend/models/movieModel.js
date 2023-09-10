const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    nameId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    cover_url: {
      type: String,
      required: true,
    },
    yt_url: {
      type: String,
      required: true,
    },
    pg: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", movieSchema);
