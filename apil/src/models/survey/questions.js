const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) =>{
  class Questions extends Model{

    static associate(models){
      Questions.hasMany(models.Answers, {foreignkey: 'answersId'});
      Questions.hasMany(models.User, {foreignKey: 'userId'});
    }
  }
  Questions.init({
    question: DataTypes.STRING,
  });
};