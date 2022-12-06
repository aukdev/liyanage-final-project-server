const express = require("express");
const path = require("path");
//import apollo server
const { ApolloServer } = require("apollo-server-express");
// import typeDefs and resolvers
const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");

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

//get all
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

//apply apollo server with express app
// server.applyMiddleware({ app });

db.once("open", () => {
  app.listen(PORT, async () => {
    console.log(`API server running on port ${PORT}!`);

    // runSeeds();
  });
});
