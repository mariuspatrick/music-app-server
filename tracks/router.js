const { Router } = require("express");
const Song = require("./model");

const router = new Router();

router.post("/track/:playlistId", async (req, res) => {
  console.log("got here??");

  try {
    // const song = req.body;
    // first check if songid is there,
    // if songid is there, check if songid is already in tracks table if not add (one sql command insert of update )
    // check if playlist isn't new for this user.
    // add trackid to playlist model (track id and playlist id )
    // send a response to this request to user with {status: "ok"} or {status: "playlist created "}
    // song.track_title = track_title;
    const playlistItem = await Song.create(req.body);
    // console.log("song", song);
    res.send(song);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
