const Sequelize = require("sequelize");
const db = require("../db");
const User_playlist = require("../user_playlist/model");

const Playlist = db.define("playlist", {
  track_title: {
    type: Sequelize.STRING,
    alloNull: false
  },
  trackId: {
    type: Sequelize.STRING,
    allowNull: false
  },
  artist: {
    type: Sequelize.STRING
  }
});

Playlist.belongsTo(User_playlist);
User_playlist.hasMany(Playlist);

module.exports = Playlist;
