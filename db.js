const Sequelize = require("sequelize");
const { dbPassword, dbPort } = require('./config');

const databaseUrl =
  process.env.DATABASE_URL ||
  `postgres://postgres:${dbPassword}@localhost:${dbPort}/postgres`;

const db = new Sequelize(databaseUrl);

db.sync({ force: false })
  .then(() => console.log("Database has been updated"))
  .catch(err => console.log(err));

module.exports = db;
