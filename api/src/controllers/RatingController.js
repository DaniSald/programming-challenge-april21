const sequelize = require("sequelize");
const connection = require("../database");
const Movie = require("../models/Movie");
const Rating = require("../models/Rating");

module.exports = {
  async getTopMovies(req, res) {
    const { limit } = req.params;

    Rating.associate(connection.models);
    Movie.associate(connection.models);

    const rank = await Rating.findAll({
      limit,
      include: [{ model: Movie, attributes: ["id", "title"], as: "movie" }],
      attributes: [[sequelize.fn("AVG", sequelize.col("rating")), "mean"]],
      group: ["movie_id", "id"],
      order: sequelize.literal("mean DESC"),
    });

    return res.status(200).json(rank);
  },
};
