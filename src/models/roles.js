'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
  
    static associate(models) {
      this.hasMany(models.UserRoles, {
        foreignKey: 'role_id'
      });
    }
  };
  Roles.init({
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Roles',
    tableName: 'roles',
    underscored: true,
  });
  return Roles;
};