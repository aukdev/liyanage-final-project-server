const { Schema, model } = require("mongoose");

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const movieSchema = new Schema(
  {
    cast: [
      {
        type: String,
      },
    ],
    description: {
      type: String,
    },
    // saved movie id from API
    movieId: {
      type: String,
    },
    image: {
      type: String,
    },
    link: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

const Movie = model("Movie", movieSchema);

module.exports = { Movie, movieSchema };
