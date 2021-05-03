const connection = require("../database");

module.exports = {
  async getTopMovies(req, res) {
    const { limit } = req.params;

    // using raw query due sequelize performance issues
    const [rank] = await connection.query(
      `SELECT movies.id, movies.title, ratings.mean FROM movies, (SELECT movie_id, AVG(rating) AS mean FROM ratings GROUP BY movie_id ORDER BY mean DESC LIMIT ${limit}) AS ratings WHERE movies.id = ratings.movie_id ORDER BY mean DESC;`
    );

    // uncomment this block to use sequelize native associations (LEFT OUTER JOIN)
    /*
    Rating.associate(connection.models);

    const rank = await Rating.findAll({
      limit,
      include: [{ model: Movie, attributes: ["id", "title"] }],
      attributes: [[sequelize.fn("AVG", sequelize.col("rating")), "mean"]],
      group: ["movie_id", "id"],
      order: sequelize.literal("mean DESC"),
    });
    */

    return res.status(200).json(rank);
  },
};
