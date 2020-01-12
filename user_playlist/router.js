const { Router } = require("express");
const User_playlist = require("./model");
const authMiddleware = require("../login/auth");

const router = new Router();

router.get("/playlist/:playlistId", async (req, res) => {
  try {
    console.log("todo");
    res.send({ todo: "text" });
  } catch (err) {
    console.error(err);
  }
});

router.post("/playlist", authMiddleware, async (req, res) => {
  try {
    const { user } = req;
    userPlaylist = req.body;
    userPlaylist.userId = user.id;
    console.log("request playlist post");
    //const name = "testName";
    const entity = await User_playlist.create(userPlaylist);
    console.log("entity", entity);
    res.send(entity);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
