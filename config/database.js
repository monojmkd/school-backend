let sq = require("sequelize");

let sequelize = new sq.Sequelize({
  dialect: "sqlite",
  storage: "database/assignment_database.sqlite",
});

module.exports = {
  DataTypes: sq.DataTypes,
  sequelize,
};
