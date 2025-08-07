import mongoose from "mongoose";

const dbConnect= async()=>{
    if(mongoose.connection.readyState>=1){
      return;
    }
    try {
        await mongoose.connect(process.env.md)
        console.log("db connect");
    } catch (error) {
        console.error(error)
    }
    
}

export default dbConnect