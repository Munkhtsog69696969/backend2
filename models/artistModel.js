const {Schema, Types, model} =require("mongoose");

const artistSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    creator:{type:Schema.Types.ObjectId , ref:"User"},
    duration:Number,
    createdAt:{type:Date,default:Date.now()},
    url:String,
})

const Artist=model("Artist",artistSchema);

exports.Artist=Artist;