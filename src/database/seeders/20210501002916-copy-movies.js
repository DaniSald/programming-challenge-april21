"use strict";
const path = require("path");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(
      `COPY movies(movie_id, title, genre) FROM \'${path.join(
        __dirname,
        "..",
        "raw_data",
        "movies.csv"
      )}\' DELIMITER ',' CSV HEADER;`
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("movies", null, {});
  },
};
