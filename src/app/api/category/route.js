import dbConnect from "@/backend/db";
import Category from "@/backend/category";
import { NextResponse } from "next/server";



export async function POST(req) {
    await dbConnect()
    try {
        const data = await req.json()
        const newCategory = await Category.create(data)
        return NextResponse.json(
            {newCategory,
                message:"Category Created Successfully"},
            {status: 201}

        )
    } catch (error) {
        return NextResponse.json(
            {error:error},
            {Status:500}
        )
    }
    
}
export async function GET(req) {
    await dbConnect()
    try {
        
        const getCategory = await Category.find()
        return NextResponse.json(
            {getCategory,
                message:"Category get Successfully"},
            {status: 200}

        )
    } catch (error) {
        return NextResponse.json(
            {error:error},
            {Status:500}
        )
    }
    
}