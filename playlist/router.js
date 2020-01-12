const { Router } = require("express");
const Playlist = require("./model");
// const authMiddleware = require("../login/auth");

const router = new Router();

router.get("/playlist/:playlistId", async (req, res) => {
  try {
    const entity = await Playlist.findAll({
      where: {
        userPlaylistId: req.params.playlistId
      }
    });
    res.send(entity);
  } catch (err) {
    console.error(err);
  }
});

router.post("/playlist/:playlistId", async (req, res) => {
  try {
    playlistTracks = req.body;
    playlistTracks.userPlaylistId = req.params.playlistId;
    console.log("req.params.id in playlist router: ", req.params.playlistId);
    const entity = await Playlist.create(playlistTracks);
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

router.delete("/event/:playlistId", async (req, res, next) => {
  try {
    const entity = await Playlist.destroy({
      where: { id: req.params.playlistId }
    });
    // .then(number => response.send({ number }))
    res.send(entity);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
