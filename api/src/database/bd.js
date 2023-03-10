require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_HOST, DB_USER, DB_NAME, DB_PASS, DB_DIALECT } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  define: {
    freezeTableName: true,
    timestamps: false,
    freezeColumnName: true,
  },
});

const basename = path.basename(__filename);
const modelDefiners = [];
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));
let entries = Object.entries(sequelize.models);
sequelize.models = Object.fromEntries(entries);

modelDefiners.forEach((model) => model(sequelize));

const { article, category, comment, photos, user, userTypes } = sequelize.models;

module.exports = {
  ...sequelize.models,
  cxn: sequelize,
};
