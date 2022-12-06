const { Movie, Book, MovieComment, BookComment } = require("../models");

const bookSeedData = [
  {
    authors: ["amila"],
    description: "some description",
    image: "image1",
    link: "link1",
    title: "Book 1",
  },
  {
    authors: ["upul"],
    description: "some description",
    image: "image2",
    link: "link2",
    title: "Book 2",
  },
  {
    authors: ["kumara"],
    description: "some description",
    image: "image3",
    link: "link3",
    title: "Book 3",
  },
  {
    authors: ["nimal"],
    description: "some description",
    image: "image4",
    link: "link4",
    title: "Book 4",
  },
];

const bookCommentSeedData = [
  {
    bookId: "638ed04855356e246c00563e",
    user: "amila",
    comment: "book 1 comment 1",
  },
  {
    bookId: "638ed04855356e246c00563e",
    user: "amila",
    comment: "book 1 comment 2",
  },
  {
    bookId: "638ed04855356e246c00563e",
    user: "amila",
    comment: "book 1 comment 3",
  },
  {
    bookId: "638ed04855356e246c00563e",
    user: "amila",
    comment: "book 1 comment 4",
  },
  {
    bookId: "638ed04855356e246c005640",
    user: "amila",
    comment: "book 2 comment 1",
  },
  {
    bookId: "638ed04855356e246c005640",
    user: "amila",
    comment: "book 2 comment 2",
  },
  {
    bookId: "638ed04855356e246c005640",
    user: "amila",
    comment: "book 2 comment 3",
  },
  {
    bookId: "638ed04855356e246c005640",
    user: "amila",
    comment: "book 2 comment 4",
  },
  {
    bookId: "638ed04855356e246c005641",
    user: "amila",
    comment: "book 3 comment 1",
  },
  {
    bookId: "638ed04855356e246c005641",
    user: "amila",
    comment: "book 3 comment 2",
  },
  {
    bookId: "638ed04855356e246c005641",
    user: "amila",
    comment: "book 3 comment 3",
  },
  {
    bookId: "638ed04855356e246c005641",
    user: "amila",
    comment: "book 3 comment 4",
  },
  {
    bookId: "638ed04855356e246c00563f",
    user: "amila",
    comment: "book 4 comment 1",
  },
  {
    bookId: "638ed04855356e246c00563f",
    user: "amila",
    comment: "book 4 comment 2",
  },
  {
    bookId: "638ed04855356e246c00563f",
    user: "amila",
    comment: "book 4 comment 3",
  },
  {
    bookId: "638ed04855356e246c00563f",
    user: "amila",
    comment: "book 4 comment 4",
  },
];

const movieSeedData = [
  {
    cast: ["amila"],
    description: "some movie description",
    image: "movie 1 image",
    link: "movie 1 link",
    title: "movie 1 title",
  },
  {
    cast: ["amila"],
    description: "some movie description",
    image: "movie 2 image",
    link: "movie 2 link",
    title: "movie 2 title",
  },
  {
    cast: ["amila"],
    description: "some movie description",
    image: "movie 3 image",
    link: "movie 3 link",
    title: "movie 3 title",
  },
  {
    cast: ["amila"],
    description: "some movie description",
    image: "movie 4 image",
    link: "movie 4 link",
    title: "movie 4 title",
  },
];

const movieCommentSeedData = [
  {
    movieId: "638ed3845b933602a8906f10",
    user: "amila",
    comment: "movie 1 comment 1",
  },
  {
    movieId: "638ed3845b933602a8906f10",
    user: "amila",
    comment: "movie 1 comment 2",
  },
  {
    movieId: "638ed3845b933602a8906f10",
    user: "amila",
    comment: "movie 1 comment 3",
  },
  {
    movieId: "638ed3845b933602a8906f10",
    user: "amila",
    comment: "movie 1 comment 4",
  },
  {
    movieId: "638ed3845b933602a8906f13",
    user: "amila",
    comment: "movie 2 comment 1",
  },
  {
    movieId: "638ed3845b933602a8906f13",
    user: "amila",
    comment: "movie 2 comment 2",
  },
  {
    movieId: "638ed3845b933602a8906f13",
    user: "amila",
    comment: "movie 2 comment 3",
  },
  {
    movieId: "638ed3845b933602a8906f13",
    user: "amila",
    comment: "movie 2 comment 4",
  },
  {
    movieId: "638ed3845b933602a8906f11",
    user: "amila",
    comment: "movie 3 comment 1",
  },
  {
    movieId: "638ed3845b933602a8906f11",
    user: "amila",
    comment: "movie 3 comment 2",
  },
  {
    movieId: "638ed3845b933602a8906f11",
    user: "amila",
    comment: "movie 3 comment 3",
  },
  {
    movieId: "638ed3845b933602a8906f11",
    user: "amila",
    comment: "movie 3 comment 4",
  },
  {
    movieId: "638ed3845b933602a8906f12",
    user: "amila",
    comment: "movie 4 comment 1",
  },
  {
    movieId: "638ed3845b933602a8906f12",
    user: "amila",
    comment: "movie 4 comment 2",
  },
  {
    movieId: "638ed3845b933602a8906f12",
    user: "amila",
    comment: "movie 4 comment 3",
  },
  {
    movieId: "638ed3845b933602a8906f12",
    user: "amila",
    comment: "movie 4 comment 4",
  },
];

const runSeeds = async () => {
  //   const bookData = await Book.create(bookSeedData);
  //   if (bookData) {
  //     console.log("book data added");
  //   }
  //   const bookCommentData = await BookComment.create(bookCommentSeedData);
  //   if (bookCommentData) {
  //     console.log("book comments added");
  //   }
  //   const movieData = await Movie.create(movieSeedData);
  //   if (movieData) {
  //     console.log("movie data added");
  //   }
  //   const movieCommentData = await MovieComment.create(movieCommentSeedData);
  //   if (movieCommentData) {
  //     console.log("movie comment data added");
  //   }
};

module.exports = runSeeds;
