const express = require("express");
const spotifyRouter = require("./spotify");
const signup = require("./signup/router");

const bodyParser = require("body-parser");
const cors = require("cors");

const port = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(spotifyRouter);
app.use(signup);

app.listen(port, console.log(`Listening on port: ${port}`));
