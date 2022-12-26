const {
  Model,
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    
    static associate(models) {
      Article.belongsTo(models.Category, { foreignKey: 'categoryId' })
      Article.hasMany(models.Comment, { foreignKey: 'articlesId' })
    }
  }
  Article.init({
    name: DataTypes.STRING,
    content: DataTypes.TEXT,
    image: DataTypes.STRING,
    type: DataTypes.STRING,
  }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: 'Article',
  })
  return Article;
}
