const {User}=require("../models/userModel");

const {body,validationResult}=require("express-validator");

exports.getUsers=async(req,res)=>{
    const result= await User.find({});
    res.send(result);
}

exports.createUser=async(req,res)=>{
    const body=req.body;
    const result=new User(body);
    result.save();
    res.send(result);
}

exports.getSpecificUser=async(req,res)=>{
    const id=req.params.id;
    const result=await User.findById(id);
    res.send(result);
}


exports.loginUser=async(req,res)=>{
    const username=req.body.username;

    const password=req.body.password;

    const user=await User.find({username});

    if(user==""){
        res.send("user doesnt exist");
    }else{
        if(user[0].password==password){
            console.log("logged in");
            res.send(user[0]);
        }else{
            console.log("wrong username or password");
            res.send("wrong username or password");
        }
    }
}

exports.updateUser=async(req,res)=>{
    const id=req.params.id;
    const playlistId=req.body.playlistId;
    const user=await User.findById(id);
    user.playlists.push(playlistId);
    user.save();
}