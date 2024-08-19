import "../init";
import { NextRequest, NextResponse } from "next/server";
import { container } from "tsyringe";
import { ProductService } from "../services/productService";

export async function GET():Promise<NextResponse>{
    try{
        const productService = container.resolve(ProductService);
        const products = await productService.getProducts();
        return NextResponse.json({products}, {status:200});
    }catch(error){
        return NextResponse.json({message: "Error with the verb GET", error}, {status:500});
    }
}

export async function POST(req:NextRequest):Promise<NextResponse>{
    try{
        const {url_image,title,description,price,quantity, user_id} = await req.json();
        const productService = container.resolve(ProductService);
        const productCreated = await productService.createProduct({url_image,title,description,price,quantity,user_id});
        if(productCreated){
            return NextResponse.json({message: "Created product correctly", productCreated}, {status:201});
        }
        return NextResponse.json({messge: "Invalid data provided"}, {status:400})

    }catch(error){
        return NextResponse.json({message: "Error with the verb POST", error}, {status:500});
    }
};