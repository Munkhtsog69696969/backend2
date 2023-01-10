const {Schema, Types, model} =require("mongoose");

const userSchema=new Schema({
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },

    playlists:[{type:Schema.Types.ObjectId , ref:"playlists"}]

})

const User=model("User",userSchema);

exports.User=User;