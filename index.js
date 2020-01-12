const express = require("express");
const spotifyRouter = require("./spotify");
const signup = require("./signup/router");
const { router: loginRouter } = require("./login/router");
const Song = require("./tracks/model");
const songRouter = require("./tracks/router");
const routerUserPlaylist = require("./user_playlist/router");

const cors = require("cors");

const port = process.env.PORT || 4000;

const app = express();
const jsonParser = express.json();

app.use(cors());
app.use(jsonParser);
app.use(spotifyRouter);
app.use(signup);
app.use(loginRouter);
app.use(songRouter);
app.use(routerUserPlaylist);

app.listen(port, console.log(`Listening on port: ${port}`));
