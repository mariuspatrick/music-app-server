const express = require("express");
const spotifyRouter = require("./spotify");
const signup = require("./signup/router");
const { router: loginRouter } = require("./login/router");
const routerUserPlaylist = require("./playlists/router");
const playlistRouter = require("./tracks/router");

const cors = require("cors");

const port = process.env.PORT || 4000;

const app = express();
const jsonParser = express.json();

app.use(cors());
app.use(jsonParser);
app.use(spotifyRouter);
app.use(signup);
app.use(loginRouter);
app.use(routerUserPlaylist);
app.use(playlistRouter);

app.listen(port, console.log(`Listening on port: ${port}`));
