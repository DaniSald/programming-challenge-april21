const Movie = require("../models/Movie");
const { Op } = require("sequelize");

module.exports = {
  async filterMovies(req, res) {
    const { year, genre } = req.query;
    let movies;

    if (!year) {
      movies = await Movie.findAll({
        where: {
          genre: { [Op.substring]: `${genre}` },
        },
      });
    } else if (!genre) {
      movies = await Movie.findAll({
        where: {
          title: { [Op.endsWith]: `(${year})` },
        },
      });
    } else {
      movies = await Movie.findAll({
        where: {
          title: { [Op.endsWith]: `(${year})` },
          genre: { [Op.substring]: `${genre}` },
        },
      });
    }

    movies.length === 0
      ? res.status(404).json(movies)
      : res.status(200).json(movies);
  },
};
