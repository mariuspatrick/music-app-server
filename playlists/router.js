const { Router } = require("express");
const Playlist = require("./model");
const authMiddleware = require("../login/auth");

const router = new Router();

router.get("/playlist", authMiddleware, async (req, res) => {
  try {
    const { user } = req;

    const entity = await Playlist.findAll({
      where: {
        userId: user.id
      }
    });

    res.send(entity);
  } catch (err) {
    console.error(err);
  }
});

// createPlaylistId = playlist => {
//   const id = Math.random() * 1000;
//   if (id !== playlist.id) {
//     return (playlist.playlistId = Math.round(id));
//   } else {
//     return;
//   }
// };

router.post("/playlist", authMiddleware, async (req, res) => {
  try {
    const { user } = req;

    userPlaylist = req.body;
    userPlaylist.userId = user.id;

    const entity = await Playlist.create(userPlaylist);

    res.send(entity);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
