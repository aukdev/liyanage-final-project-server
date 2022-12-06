const { Schema, model } = require("mongoose");

const bookCommentSchema = new Schema(
  {
    // saved book id from bookDB
    bookId: {
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

const BookComment = model("BookComment", bookCommentSchema);

module.exports = BookComment;
