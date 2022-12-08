const axios = require("axios");
const { Book } = require("../models");

const bookApiSeeds = () => {
  axios
    .get("https://www.googleapis.com/books/v1/volumes?q=english")
    .then(async (response) => {
      // handle success
      // console.log(response.data.items);
      const bookApiData = response.data.items;
      const dbBookData = await Book.find();

      if (dbBookData) {
        const filtedData = bookApiData.filter((ele) => {
          let isMatch = false;

          dbBookData.forEach((dbD) => {
            if (dbD.bookId == ele.id) {
              isMatch = true;
            }
          });

          if (isMatch) {
            return false;
          } else {
            return ele;
          }
        });

        if (filtedData) {
          const correctDataForDb = filtedData.map((ele) => {
            return {
              authors: ele.volumeInfo.authors
                ? ele.volumeInfo.authors
                : ["no authors"],
              description: ele.volumeInfo.description
                ? ele.volumeInfo.description
                : ele.volumeInfo.title,
              bookId: ele.id,
              image: ele.volumeInfo.imageLinks.thumbnail,
              title: ele.volumeInfo.title,
            };
          });

          if (correctDataForDb) {
            const data = await Book.create(correctDataForDb);
            console.log(data);
          }
        }
      }

      // const filtedData = bookApiData.map((ele) => {
      //   return {
      //     authors: ele.volumeInfo.authors
      //       ? ele.volumeInfo.authors
      //       : ["no authors"],
      //     description: ele.volumeInfo.description
      //       ? ele.volumeInfo.description
      //       : ele.volumeInfo.title,
      //     bookId: ele.id,
      //     image: ele.volumeInfo.imageLinks.thumbnail,
      //     title: ele.volumeInfo.title,
      //   };
      // });

      // console.log(filtedData);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};

module.exports = bookApiSeeds;
