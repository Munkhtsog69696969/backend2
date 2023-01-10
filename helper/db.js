const mongoose=require("mongoose");

const uri="mongodb+srv://Munkhtsog:Munkhtsog2005@cluster0.0lcnmk0.mongodb.net/?retryWrites=true&w=majority";


const connect=async()=>{
    try{
        mongoose.set("strictQuery",false);
        await mongoose.connect(uri);
        console.log("Success")
    }catch(err){
        console.log(err);
        throw new Error(err.message)
    }
}

module.exports=connect