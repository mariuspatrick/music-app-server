const SpotifyWebApi = require("spotify-web-api-node");
const { Router } = require("express");

const ***REMOVED*** = "***REMOVED***",
  clientSeret = "***REMOVED***";

const spotifyApi = new SpotifyWebApi({
  ***REMOVED***: ***REMOVED***,
  clientSecret: clientSeret
});

const router = new Router();

router.get("/albums", async (req, res) => {
  try {
    await authenticate();
    const response = await spotifyApi.getArtistAlbums(
      "43ZHCT0cAZBISjO8DG9PnE",
      {
        limit: 10,
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
    const response = await "https://api.spotify.com/v1/browse/categories";

    res.send(response);
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

// authenticate();

module.exports = router;
