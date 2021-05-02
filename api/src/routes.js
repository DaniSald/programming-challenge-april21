const express = require("express");
const MovieController = require("./controllers/MovieController");
const RatingController = require("./controllers/RatingController");

const routes = express.Router();

routes.get("/", (req, res) => {
  res.json({ mess: "OK" });
});

routes.get("/movie", MovieController.filterMovies);
routes.get("/rating/:limit", RatingController.getTopMovies);

module.exports = routes;
