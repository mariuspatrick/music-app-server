const Sequelize = require("sequelize");
const db = require("../db");

const User = db.define("user", {
  name: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false },
  password: { type: Sequelize.STRING, allowNull: false },
  main_genre: {
    type: Sequelize.STRING
  },
  genres: {
    type: Sequelize.STRING
  },
  artists: {
    type: Sequelize.STRING
  }
});

module.exports = User;
