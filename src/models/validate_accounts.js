'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ValidateAccounts extends Model {

    static associate(models) {
      this.belongsTo(models.Users, {
        foreignKey: 'user_id'
      })
    }
  };
  ValidateAccounts.init({
    hash: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ValidateAccounts',
    tableName: 'validate_accounts',
    underscored: true,
  });
  return ValidateAccounts;
};