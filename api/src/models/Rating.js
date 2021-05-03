const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Rating extends Model {}

Rating.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Rating",
  }
);

Rating.removeAttribute("id");

Rating.associate = (models) => {
  Rating.belongsTo(models.Movie, {
    foreignKey: "movie_id",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
};

module.exports = Rating;
