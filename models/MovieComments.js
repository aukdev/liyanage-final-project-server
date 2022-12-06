const { Schema, model } = require("mongoose");

const movieCommentSchema = new Schema(
  {
    // saved movie id from movieDB
    movieId: {
      type: String,
    },
    user: {
      type: String,
    },
    comment: {
      type: String,
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

const MovieComment = model("MovieComment", movieCommentSchema);

module.exports = MovieComment;
