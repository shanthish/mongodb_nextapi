import mongoose from "mongoose";

export let connectDb = async () =>{
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log("DB connected");       
    }
    catch(err){
        console.log(err);
    }
}