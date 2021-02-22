const colyseus = require("colyseus");
const http = require("http");
const express = require("express");
const cors = require("cors");
const { ChessRoom } = require("./room");
const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', function (req, res) {
  // console.log('request')
  res.send('GET request to the homepage')
})

const gameServer = new colyseus.Server({
  server: http.createServer(app),
});

gameServer.listen(port);
gameServer.define("room", ChessRoom);
