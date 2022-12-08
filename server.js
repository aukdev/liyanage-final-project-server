const express = require("express");
const path = require("path");
//import apollo server
const { ApolloServer } = require("apollo-server-express");
// import typeDefs and resolvers
const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");
const axios = require("axios");
const { Movie } = require("./models");
const bookApiSeeds = require("./seeds/googleBook");

//db connection
const db = require("./config/connection");
// const runSeeds = require("./seeds");

// const routes = require('./routes');

//express server
const app = express();
const PORT = process.env.PORT || 3001;

async function startServer() {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}
startServer();

//apollo server
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: authMiddleware,
// });

//middleware parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// app.use(routes);

const options = {
  method: "GET",
  url: "https://imdb8.p.rapidapi.com/auto-complete",
  params: { q: "english" },
  headers: {
    "X-RapidAPI-Key": "afdccf8810msh7ed3e4f5e519939p1a6bdejsn9d6454e17e10",
    "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
  },
};

db.once("open", () => {
  app.listen(PORT, async () => {
    console.log(`API server running on port ${PORT}!`);

    // runSeeds();
    bookApiSeeds();

    axios
      .request(options)
      .then(async (response) => {
        const movieApiData = response.data.d;
        const dbMovieData = await Movie.find();

        if (dbMovieData) {
          const filtedData = movieApiData.filter((ele) => {
            let isMatch = false;

            dbMovieData.forEach((dbD) => {
              if (dbD.movieId == ele.id) {
                isMatch = true;
              }
            });

            if (isMatch) {
              return false;
            } else {
              return ele;
            }
          });

          // console.log(filtedData);
          if (filtedData) {
            const correctDataForDb = filtedData.map((ele) => {
              return {
                description: ele.l,
                title: ele.l,
                image: ele.i.imageUrl,
                movieId: ele.id,
              };
            });

            if (correctDataForDb) {
              const data = await Movie.create(correctDataForDb);
              console.log(data);
            }
          }
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  });
});
