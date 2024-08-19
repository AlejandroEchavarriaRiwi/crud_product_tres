import "../init";
import { NextRequest, NextResponse } from "next/server";
import { container } from "tsyringe";
import { ProductService } from "../services/productService";

export async function POST(req:NextRequest):Promise<NextResponse>{
    try{
        const {title,description,price,user_id,cart_id} = await req.json();
        const productService = container.resolve(ProductService);
        const productCreated = await productService.createProduct({title,description,price,user_id,cart_id});
        if(productCreated){
            return NextResponse.json({message: "Created product correctly", productCreated}, {status:201});
        }
        return NextResponse.json({messge: "Invalid data provided"}, {status:400})

    }catch(error){
        return NextResponse.json({message: "Error with the verb POST", error}, {status:500});
    }
};