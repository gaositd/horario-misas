const {
    Model,
  } = require('sequelize')
  
  module.exports = (sequelize, DataTypes) => {
    class Category extends Model {
      static associate(models) {
        Category.hasMany(models.Article, { foreignKey: 'categoryId' })
      }
    }
    Category.init({
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      image: DataTypes.STRING,
    }, {
      sequelize,
      paranoid: true,
      timestamps: true,
      modelName: 'Category',
    })
    return Category
  }
  