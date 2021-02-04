const SpotifyWebApi = require("spotify-web-api-node");
const { Router } = require("express");

const { clientId, clientSecret } = require('./config');

const spotifyApi = new SpotifyWebApi({
  clientId: clientId,
  clientSecret: clientSecret
});

const router = new Router();

router.get("/albums", async (req, res) => {
  try {
    await authenticate();
    const response = await spotifyApi.getArtistAlbums(
      "43ZHCT0cAZBISjO8DG9PnE",
      {
        limit: 15,
        offset: 20
      }
    );
    res.send(response);
  } catch (err) {
    console.error(err);
  }
});

router.get("/genres", async (req, res) => {
  try {
    await authenticate();
    console.log("Getting query params", req.query);
    const genre = req.query.genre;
    const songs = await spotifyApi.getPlaylistsForCategory(genre, {
      country: "GB",
      limit: 5,
      offset: 0
    });
    res.send(songs);
  } catch (err) {
    console.error(err);
  }
});

router.get("/genres/:playlistId", async (req, res) => {
  try {
    await authenticate();
    playlistId = req.params.playlistId;
    console.log("req.params: ", req.params);
    const playlist = await spotifyApi.getPlaylist(playlistId, {
      limit: 5,
      offset: 0
    });
    res.send(playlist.body);
  } catch (err) {
    console.error(err);
  }
});

router.get("/", async (req, res) => {
  try {
    await authenticate();
    const tracks = await spotifyApi.getArtistTopTracks(
      "0oSGxfWSnnOXhD2fKuz2Gy",
      "GB"
    );
    res.send(tracks);
  } catch (err) {
    console.error(err);
  }
});

const authenticate = async () => {
  try {
    const data = await spotifyApi.clientCredentialsGrant();
    console.log("The access token expires in " + data.body["expires_in"]);
    console.log("The access token is " + data.body["access_token"]);

    spotifyApi.setAccessToken(data.body["access_token"]);
  } catch (err) {
    console.error(err);
  }
};

module.exports = router;
