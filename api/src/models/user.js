'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      
      User.belongsTo(models.Role, { foreignKey: 'roleId' });
      User.hasMany(models.Comment, { foreignKey: 'userId' });
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    photo: DataTypes.STRING,
    roleId: DataTypes.INTEGER,
    deletedAt: DataTypes.DATEONLY,
  }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: 'User',
  });

  return User;
};