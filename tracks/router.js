const { Router } = require("express");
const Tracks = require("./model");
// const authMiddleware = require("../login/auth");

const router = new Router();

router.get("/tracks/:playlistId", async (req, res) => {
  try {
    const entity = await Tracks.findAll({
      where: {
        userPlaylistId: req.params.playlistId
      }
    });
    res.send(entity);
  } catch (err) {
    console.error(err);
  }
});

router.post("/tracks/:playlistId", async (req, res) => {
  try {
    playlistTracks = req.body;
    playlistTracks.playlistId = req.params.playlistId;
    console.log("req.params.id in playlist router: ", req.params.playlistId);
    const entity = await Tracks.create(playlistTracks);
    res.send(entity);
  } catch (err) {
    console.error(err);
  }
});

// router.put("/playlist/:playlistId", async (req, res, next) => {
//   try {
//     const entity = await Playlist.findByPk(req.params.id)
//       .then(event => event.update(req.body))
//       .then(event => res.send(event))
//       .catch(next);

//   } catch(err) {
//     console.error(err)
//   }
// });

router.delete("/playlist/:playlistId", async (req, res, next) => {
  try {
    const entity = await Tracks.destroy({
      where: { id: req.params.playlistId }
    });
    res.send(entity);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
