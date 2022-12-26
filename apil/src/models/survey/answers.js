const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) =>{
  class Answers extends Model{

    static associate(models){
      Answers.belongsTo(models.Question, {foreignkey: 'questionId'})
    }
  }
  Answers.init({
    answer: DataTypes.STRING,
    valid:DataTypes.BOOLEAN
  });
};