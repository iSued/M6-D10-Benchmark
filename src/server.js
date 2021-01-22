const express = require("express");
const cors = require("cors");
const listEndpoints = require("express-list-endpoints");
const db = require("./db");
const {
  badRequestHandler,
  notFoundHandler,
  genericErrorHandler,
} = require("./errorHandlers");

const ProductsRouter = require("./services/Products/index");
const ReviewsRouter = require("./services/Reviews/index");

const server = express();
const port = process.env.PORT || 3002;

server.use(cors());
server.use(express.json());

server.use("/reviews", ReviewsRouter);
server.use("/products", ProductsRouter);

server.use(badRequestHandler);
server.use(notFoundHandler);
server.use(genericErrorHandler);

console.log(listEndpoints(server));

db.sequelize.sync({ force: false }).then((result) => {
  server.listen(port, () => {
    console.log("THIS IS AN ERROR");
  });
});
