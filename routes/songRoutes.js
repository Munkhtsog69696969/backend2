const express=require("express");
const { createSong }=require("../controllers/songController");
const {getSong}=require("../controllers/songController");
const {deleteSong}=require("../controllers/songController");


const router=express.Router()

router
    .get("/songs",getSong)
    .post("/songs",createSong)
    .put("/songs/:id",()=>{})
    .delete("/songs/:id",deleteSong);

exports.songRoutes=router;
