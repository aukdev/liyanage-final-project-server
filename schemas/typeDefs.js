const { gql } = require("apollo-server-express");

// typeDefs
const typeDefs = gql`
  type Movie {
    _id: ID
    movieId: String
    cast: [String]
    description: String
    link: String
    title: String
    image: String
    comments: [MovieComment]
  }

  type Book {
    _id: ID
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
    comments: [BookComment]
  }

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type MovieComment {
    _id: ID
    movieId: String
    user: String
    comment: String
  }

  type BookComment {
    _id: ID
    bookId: String
    user: String
    comment: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input SavedBookInput {
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  input SavedMovieInput {
    movieId: String
    cast: [String]
    description: String
    title: String
    image: String
  }

  type Query {
    me: User
    getMovie(id: String): Movie
    getMovies: [Movie]
    getBook(id: String): Book
    getBooks: [Book]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addMovieComment(
      movieId: String!
      user: String!
      comment: String!
    ): MovieComment
    addBookComment(
      bookId: String!
      user: String!
      comment: String!
    ): BookComment
    saveBook(book: SavedBookInput): User
    saveMovie(movie: SavedMovieInput): User
    removeBook(bookId: String!): User
    removeMovie(movieId: String!): User
  }
`;

// export the typeDefs
module.exports = typeDefs;
