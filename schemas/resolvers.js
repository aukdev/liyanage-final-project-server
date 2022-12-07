const { User, Book, Movie, BookComment, MovieComment } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

/// demo data
// const movies = require("../demoData/movies.js");
// const comments = require("../demoData/comments.js");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
    getMovie: async (parent, args, context) => {
      const movieData = await Movie.findOne({
        _id: args.id,
      });

      if (movieData) {
        return movieData;
      }
    },

    getMovies: async (parent, args, context) => {
      const moviesData = await Movie.find();

      if (moviesData) {
        return moviesData;
      } else {
        return [];
      }
    },

    getBook: async (parent, args, context) => {
      const bookData = await Book.findOne({ _id: args.id });

      if (bookData) {
        return bookData;
      }
    },

    getBooks: async (parent, args, context) => {
      const booksData = await Book.find();

      if (booksData) {
        return booksData;
      } else {
        return [];
      }
    },
  },

  Movie: {
    comments: async (parent, args, context) => {
      const movieComments = await MovieComment.find({ movieId: parent._id });

      if (movieComments) {
        return movieComments;
      } else {
        return [];
      }
    },
  },

  Book: {
    comments: async (parent, args, context) => {
      const bookComments = await BookComment.find({ bookId: parent._id });

      if (bookComments) {
        return bookComments;
      } else {
        return [];
      }
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    addMovieComment: async (parent, args) => {
      const movieComment = await MovieComment.create(args);
      return movieComment;
    },

    addBookComment: async (parent, args) => {
      const bookComment = await BookComment.create(args);
      return bookComment;
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },

    saveBook: async (parent, { book }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBooks: book } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    saveMovie: async (parent, { movie }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedMovies: movie } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    removeBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId: bookId } } },
          { new: true }
        );
        return updatedUser;
      }
    },

    removeMovie: async (parent, { movieId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedMovies: { movieId: movieId } } },
          { new: true }
        );
        return updatedUser;
      }
    },
  },
};

module.exports = resolvers;
