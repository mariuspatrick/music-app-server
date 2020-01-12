const { Router } = require("express");
const User_playlist = require("./model");

const router = new Router();

router.get("/playlist/:playlistId", async (req, res) => {
  try {
    console.log("todo");
    res.send({ todo: "text" });
  } catch (err) {
    console.error(err);
  }
});

router.post("/playlist", async (req, res) => {
  try {
    console.log("request playlist post");
    const name = "testName";
    const entity = await User_playlist.create({ name, userPlaylistId: 1 });
    console.log("entity", entity);
    res.send({ todo: "text" });
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
