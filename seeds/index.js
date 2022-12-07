const { Movie, Book, MovieComment, BookComment } = require("../models");

const bookSeedData = [
  {
    authors: ["amila"],
    description: "some description",
    image:
      "https://iatse.net/wp-content/uploads/2021/08/YC-Harry-Potter-And-the-Cursed-Child-Broadway-Show-Thumbnail-1.jpg",
    link: "link1",
    title: "Book 1",
  },
  {
    authors: ["upul"],
    description: "some description",
    image:
      "https://iatse.net/wp-content/uploads/2021/08/YC-Harry-Potter-And-the-Cursed-Child-Broadway-Show-Thumbnail-1.jpg",
    link: "link2",
    title: "Book 2",
  },
  {
    authors: ["kumara"],
    description: "some description",
    image:
      "https://iatse.net/wp-content/uploads/2021/08/YC-Harry-Potter-And-the-Cursed-Child-Broadway-Show-Thumbnail-1.jpg",
    link: "link3",
    title: "Book 3",
  },
  {
    authors: ["nimal"],
    description: "some description",
    image:
      "https://iatse.net/wp-content/uploads/2021/08/YC-Harry-Potter-And-the-Cursed-Child-Broadway-Show-Thumbnail-1.jpg",
    link: "link4",
    title: "Book 4",
  },
];

const bookCommentSeedData = [
  {
    bookId: "639002c889b0e71c289a0bcc",
    user: "amila",
    comment: "book 1 comment 1",
  },
  {
    bookId: "639002c889b0e71c289a0bcc",
    user: "amila",
    comment: "book 1 comment 2",
  },
  {
    bookId: "639002c889b0e71c289a0bcc",
    user: "amila",
    comment: "book 1 comment 3",
  },
  {
    bookId: "639002c889b0e71c289a0bcc",
    user: "amila",
    comment: "book 1 comment 4",
  },
  {
    bookId: "639002c889b0e71c289a0bcd",
    user: "amila",
    comment: "book 2 comment 1",
  },
  {
    bookId: "639002c889b0e71c289a0bcd",
    user: "amila",
    comment: "book 2 comment 2",
  },
  {
    bookId: "639002c889b0e71c289a0bcd",
    user: "amila",
    comment: "book 2 comment 3",
  },
  {
    bookId: "639002c889b0e71c289a0bcd",
    user: "amila",
    comment: "book 2 comment 4",
  },
  {
    bookId: "639002c889b0e71c289a0bcf",
    user: "amila",
    comment: "book 3 comment 1",
  },
  {
    bookId: "639002c889b0e71c289a0bcf",
    user: "amila",
    comment: "book 3 comment 2",
  },
  {
    bookId: "639002c889b0e71c289a0bcf",
    user: "amila",
    comment: "book 3 comment 3",
  },
  {
    bookId: "639002c889b0e71c289a0bcf",
    user: "amila",
    comment: "book 3 comment 4",
  },
  {
    bookId: "639002c889b0e71c289a0bce",
    user: "amila",
    comment: "book 4 comment 1",
  },
  {
    bookId: "639002c889b0e71c289a0bce",
    user: "amila",
    comment: "book 4 comment 2",
  },
  {
    bookId: "639002c889b0e71c289a0bce",
    user: "amila",
    comment: "book 4 comment 3",
  },
  {
    bookId: "639002c889b0e71c289a0bce",
    user: "amila",
    comment: "book 4 comment 4",
  },
];

const movieSeedData = [
  {
    cast: ["amila"],
    description: "some movie description",
    image:
      "https://static-koimoi.akamaized.net/wp-content/new-galleries/2020/06/netflixs-dark-from-adam-to-noah-these-mind-bending-dialogues-from-the-show-will-give-you-goosebumps-01.jpg",
    link: "movie 1 link",
    title: "movie 1 title",
  },
  {
    cast: ["amila"],
    description: "some movie description",
    image:
      "https://static-koimoi.akamaized.net/wp-content/new-galleries/2020/06/netflixs-dark-from-adam-to-noah-these-mind-bending-dialogues-from-the-show-will-give-you-goosebumps-01.jpg",
    link: "movie 2 link",
    title: "movie 2 title",
  },
  {
    cast: ["amila"],
    description: "some movie description",
    image:
      "https://static-koimoi.akamaized.net/wp-content/new-galleries/2020/06/netflixs-dark-from-adam-to-noah-these-mind-bending-dialogues-from-the-show-will-give-you-goosebumps-01.jpg",
    link: "movie 3 link",
    title: "movie 3 title",
  },
  {
    cast: ["amila"],
    description: "some movie description",
    image:
      "https://static-koimoi.akamaized.net/wp-content/new-galleries/2020/06/netflixs-dark-from-adam-to-noah-these-mind-bending-dialogues-from-the-show-will-give-you-goosebumps-01.jpg",
    link: "movie 4 link",
    title: "movie 4 title",
  },
];

const movieCommentSeedData = [
  {
    movieId: "639002c989b0e71c289a0bd2",
    user: "amila",
    comment: "movie 1 comment 1",
  },
  {
    movieId: "639002c989b0e71c289a0bd2",
    user: "amila",
    comment: "movie 1 comment 2",
  },
  {
    movieId: "639002c989b0e71c289a0bd2",
    user: "amila",
    comment: "movie 1 comment 3",
  },
  {
    movieId: "639002c989b0e71c289a0bd2",
    user: "amila",
    comment: "movie 1 comment 4",
  },
  {
    movieId: "639002c989b0e71c289a0bd0",
    user: "amila",
    comment: "movie 2 comment 1",
  },
  {
    movieId: "639002c989b0e71c289a0bd0",
    user: "amila",
    comment: "movie 2 comment 2",
  },
  {
    movieId: "639002c989b0e71c289a0bd0",
    user: "amila",
    comment: "movie 2 comment 3",
  },
  {
    movieId: "639002c989b0e71c289a0bd0",
    user: "amila",
    comment: "movie 2 comment 4",
  },
  {
    movieId: "639002c989b0e71c289a0bd1",
    user: "amila",
    comment: "movie 3 comment 1",
  },
  {
    movieId: "639002c989b0e71c289a0bd1",
    user: "amila",
    comment: "movie 3 comment 2",
  },
  {
    movieId: "639002c989b0e71c289a0bd1",
    user: "amila",
    comment: "movie 3 comment 3",
  },
  {
    movieId: "639002c989b0e71c289a0bd1",
    user: "amila",
    comment: "movie 3 comment 4",
  },
  {
    movieId: "639002c989b0e71c289a0bd3",
    user: "amila",
    comment: "movie 4 comment 1",
  },
  {
    movieId: "639002c989b0e71c289a0bd3",
    user: "amila",
    comment: "movie 4 comment 2",
  },
  {
    movieId: "639002c989b0e71c289a0bd3",
    user: "amila",
    comment: "movie 4 comment 3",
  },
  {
    movieId: "639002c989b0e71c289a0bd3",
    user: "amila",
    comment: "movie 4 comment 4",
  },
];

const runSeeds = async () => {
  // const bookData = await Book.create(bookSeedData);
  // if (bookData) {
  //   console.log("book data added");
  // }
  const bookCommentData = await BookComment.create(bookCommentSeedData);
  if (bookCommentData) {
    console.log("book comments added");
  }
  // const movieData = await Movie.create(movieSeedData);
  // if (movieData) {
  //   console.log("movie data added");
  // }
  const movieCommentData = await MovieComment.create(movieCommentSeedData);
  if (movieCommentData) {
    console.log("movie comment data added");
  }
};

module.exports = runSeeds;
