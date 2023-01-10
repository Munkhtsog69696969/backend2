const {Artist}=require("../models/artistModel");

exports.createArtist=async(req,res)=>{
    const body=req.body;
    const result=await new Artist(body);
    result.save();
    res.send(result);
}

exports.getArtists=async(req,res)=>{
    const result=await Artist.find({});
    res.send(result);
}

exports.getSpecificArtist=async(req,res)=>{
    const id=req.params.id;
    const result=await Artist.findById(id);
    req.send(result);
}