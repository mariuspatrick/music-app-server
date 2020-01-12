const { Router } = require("express");
const Playlist = require("./model");
// const authMiddleware = require("../login/auth");

const router = new Router();

router.post("/playlist/:playlistId", async (req, res) => {
  try {
    playlistTracks = req.body;
    playlistTracks.userPlaylistId = req.params.playlistId;
    console.log("req.params.id in playlist router: ", req.params.playlistId);
    const entity = await Playlist.create(req.body);
    res.send(entity);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
