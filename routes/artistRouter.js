const express=require("express");

const router=express.Router();

const {getArtists}=require("../controllers/artistController");
const {createArtist}=require("../controllers/artistController")
const {getSpecificArtist}=require("../controllers/artistController")

router
    .get("/artists",getArtists)
    .get("/artists/:id",getSpecificArtist)
    .post("artists",createArtist)
exports.artistRoutes=router;