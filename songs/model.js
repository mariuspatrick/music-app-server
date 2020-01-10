const Sequelize = require("sequelize");
const db = require("../db");
const Playlist = require("../playlist/model");

const Song = db.define("song", {
  track_title: {
    type: Sequelize.STRING
  },
  artist: {
    type: Sequelize.STRING
  },
  genre: {
    type: Sequelize.STRING
  }
});

Song.belongsTo(Playlist);
Playlist.hasMany(Song);

module.exports = Song;
