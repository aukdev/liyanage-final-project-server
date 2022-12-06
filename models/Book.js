const { Schema, model } = require("mongoose");

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const bookSchema = new Schema(
  {
    authors: [
      {
        type: String,
      },
    ],
    description: {
      type: String,
    },
    // saved book id from API
    bookId: {
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
    },
  }
);

const Book = model("Book", bookSchema);

module.exports = { Book, bookSchema };
