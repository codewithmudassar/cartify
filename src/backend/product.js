import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    desc:String,
    images:Array,
    price:Number,
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Categories",
        required:true
    },
    stock:Number
},{timestamps:true})

const Product = mongoose.models.Products || mongoose.model("Products",productSchema)

export default Product