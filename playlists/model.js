const Sequelize = require("sequelize");
const db = require("../db");
const User = require("../signup/model");

const Playlist = db.define("playlist", {
  name: {
    type: Sequelize.STRING
  }
});

Playlist.belongsTo(User);
User.hasMany(Playlist);

module.exports = Playlist;
