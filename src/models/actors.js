'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Actors extends Model {
    static associate(models) {
      this.hasMany(models.ContentActors, {
        foreignKey: 'actor_id'
      });
    }
  };
  Actors.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    dob: DataTypes.DATE,
    biography: DataTypes.TEXT,
    profile_photo: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Actors',
    tableName: 'actors',
    underscored: true,
  });
  return Actors;
};