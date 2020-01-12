const Sequelize = require("sequelize");
const db = require("../db");
const Playlist = require("../playlist/model");

const Track = db.define("track", {
  trackId: {
    type: Sequelize.STRING
  },
  track_title: {
    type: Sequelize.STRING
  },
  artist: {
    type: Sequelize.STRING
  }
});

Track.belongsTo(Playlist);
Playlist.hasMany(Track);

module.exports = Track;
