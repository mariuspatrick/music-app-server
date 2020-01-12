const Sequelize = require("sequelize");
const db = require("../db");
const User = require("../signup/model");

const User_playlist = db.define("user_playlist", {
  name: {
    type: Sequelize.STRING
  },
  playlist_id: {
    type: Sequelize.INTEGER
  }
});

User_playlist.belongsTo(User);
User.hasMany(User_playlist);

module.exports = User_playlist;
