const {  Sequelize, DataTypes} = require("sequelize");


module.exports = (sequelize) => {
  sequelize.define('photos',{
    idArticle:{
      type:DataTypes.STRING,
      allowNull:false,
      primaryKey: true,  
    },
    photo:{
      namePhoto:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey: true,
      }
    },
  });
};