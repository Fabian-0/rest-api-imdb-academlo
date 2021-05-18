'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Directors extends Model {
    static associate(models) {
      this.hasMany(models.ContentActors, {
        foreignKey: 'director_id'
      })
    }
  };
  Directors.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    dob: DataTypes.DATE,
    biography: DataTypes.TEXT,
    profile_photo: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Directors',
    tableName: 'directors',
    underscored: true,
  });
  return Directors;
};