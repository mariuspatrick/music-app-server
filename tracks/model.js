const Sequelize = require("sequelize");
const db = require("../db");
const Playlist = require("../playlists/model");

const Tracks = db.define("track", {
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

Tracks.belongsTo(Playlist);
Playlist.hasMany(Tracks);

module.exports = Tracks;
