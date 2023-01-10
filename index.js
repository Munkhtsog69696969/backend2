const express=require("express");

const connect=require("./helper/db")

const cors=require("cors");

const {playListRoutes}=require("./routes")
const {songRoutes}=require("./routes");
const {artistRoutes}=require("./routes");
const {userRoutes}=require("./routes");

const port=process.env.PORT || 7000;

const app=express();

app.use(cors());
app.use(express.json());

connect();


app.get("/",(req,res)=>{
    res.send("helloo    ");
})

app.use(playListRoutes);
app.use(songRoutes);

app.use(artistRoutes);
app.use(userRoutes);

app.listen(port,()=>{
    console.log("Server running at:",port)
})
