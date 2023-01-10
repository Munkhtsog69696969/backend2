const express = require("express");
const { createPlayList } = require("../controllers/playListController");
const { getPlaylist } = require("../controllers/playListController");
const { deletePlaylist } = require("../controllers/playListController");
const { updatePlaylist } = require("../controllers/playListController");
const { getSpecififcPlaylist } = require("../controllers/playListController");

const router = express.Router();


router
    .get("/playlists", getPlaylist)
    .post("/playlists", createPlayList)
    .put("/playlists/:id", updatePlaylist)
    .delete("/playlists/:id", deletePlaylist)
    .get("/playlists/:id", getSpecififcPlaylist);

exports.playListRoutes = router;
