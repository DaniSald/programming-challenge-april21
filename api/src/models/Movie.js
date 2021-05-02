const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Movie extends Model {}

Movie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Movie",
  }
);

Movie.associate = (models) => {
  Movie.hasMany(models.Rating, { foreignKey: "id" });
};

module.exports = Movie;