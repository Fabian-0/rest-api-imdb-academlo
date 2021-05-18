'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserRoles extends Model {
    static associate(models) {
      // define association here
    }
  };
  UserRoles.init({
    user_id: DataTypes.INTEGER,
    role_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserRoles',
    tableName: 'user_roles',
    underscored: true,
  });
  return UserRoles;
};