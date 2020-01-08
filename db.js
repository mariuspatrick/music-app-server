const Sequelize = require("sequelize");
const databaseUrl = "postgres://postgres:missme@localhost:5420/postgres";

const db = new Sequelize(databaseUrl);

db.sync({ force: false })
  .then(() => console.log("Database has been updated"))
  .catch(err => console.log(err));

module.exports = db;
