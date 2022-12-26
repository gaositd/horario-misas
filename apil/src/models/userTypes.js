const { Sequelize, DataTypes} = require('sequelize');
const { descripcionUsuarios} = require('../constants/constantsWeb.js');

module.exports = (sequelize)=>{
  sequelize.define('userType', {
    id:{
      type:DataTypes.STRING,
      allowNull:false,
      primaryKey: true,
    },
    name:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    description:{
      type:DataTypes.STRING,
      defaultValue: descripcionUsuarios,
    }
  });
};