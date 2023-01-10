const {Schema, Types, model} =require("mongoose");

const playListSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
  
    createdAt:{
        type:Date,
        default:Date.now(),
    },

    creatorId:{
        type:String,
        required:true,
    },

    songs:[{type:Schema.Types.ObjectId,ref:"Song"}],
})

const PlayList=model("PlayList",playListSchema);

exports.PlayList=PlayList;