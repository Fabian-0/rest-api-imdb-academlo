'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    
    static associate(models) {

      this.hasMany(models.UserRoles, {
        foreignKey: 'user_id'
      });

      this.hasOne(models.ValidateAccounts, {
        foreignKey: 'user_id'
      });
    }
  };
  Users.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    reset_token: DataTypes.STRING,
    dob: DataTypes.DATE,
    profile_photo: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Users',
    tableName: 'users',
    underscored: true,
  });
  return Users;
};