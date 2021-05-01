"use strict";
const path = require("path");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(
      `COPY ratings(user_id, movie_id, rating, timestamp) FROM \'${path.join(
        __dirname,
        "..",
        "raw_data",
        "ratings.csv"
      )}\' DELIMITER ',' CSV HEADER;`
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("ratings", null, {});
  },
};
