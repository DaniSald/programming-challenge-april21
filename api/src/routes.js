const express = require("express");
const MovieController = require("./controllers/MovieController");

const routes = express.Router();

routes.get("/movie", MovieController.filterMovies);

module.exports = routes;
