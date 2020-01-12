const Sequelize = require("sequelize");
const db = require("../db");
const User = require("../signup/model");

const Playlist = db.define("playlist", {
  name: {
    type: Sequelize.STRING,
    alloNull: false
  },
  trackId: {
    type: Sequelize.STRING
  }
});

module.exports = Playlist;
