'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContentGenres extends Model {

    static associate(models) {
      this.belongsTo(models.Contents, {
        foreignKey: 'content_id'
      });
      this.belongsTo(models.Genres, {
        foreignKey: 'content_id'
      });
    }
  };
  ContentGenres.init({
    genre_id: DataTypes.INTEGER,
    content_id: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ContentGenres',
    tableName: 'content_genres',
    underscored: true,
  });
  return ContentGenres;
};