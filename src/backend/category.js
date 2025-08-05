import mongoose from "mongoose";


const categorySchema = new mongoose.Schema({
    title:String
},{timestamps:true})

const Category = mongoose.models.Categories || mongoose.model("Categories",categorySchema)

export default Category