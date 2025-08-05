import mongoose from "mongoose";

const dbConnect= async()=>{
    if(mongoose.connection.readyState>=1){
      return;
    }
    try {
        await mongoose.connect("mongodb+srv://root:root@cluster0.mjjgsmt.mongodb.net/cartify")
        console.log("db connect");
    } catch (error) {
        console.error(error)
    }
    
}

export default dbConnect