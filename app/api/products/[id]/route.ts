import "../../init";
import { NextRequest, NextResponse } from "next/server";
import { container } from "tsyringe";
import { ProductService } from "../../services/productService";

export async function GET(req:NextRequest, {params}: {params: {id:string}}):Promise<NextResponse>{
    try{
        const {id} = params;
        const productService = container.resolve(ProductService);
        const product = await productService.getProductById(parseInt(id));
        if(product.length !== 0){
            return NextResponse.json({message: "Product found", product}, {status:200});
        }
        return NextResponse.json({message: "Product not found"}, {status:404});

    }catch(error){
        return NextResponse.json({message: "Error with the verb GET", error}, {status:500});
    }
}

export async function PUT(req:NextRequest, {params}: {params:{id:string}}):Promise<NextResponse>{
    try{
        const {id} = params;
        const {url_image,title,description,price,quantity,user_id} = await req.json();
        const productService = container.resolve(ProductService);
        const productUpdated = await productService.updateProduct(parseInt(id), {url_image,title,description,price,quantity,user_id});
        if(productUpdated){
            return NextResponse.json({message: "Updated product correctly", productUpdated}, {status:200});
        }
        return NextResponse.json({message: "Error to update product"}, {status:400});
    }catch(error){
        return NextResponse.json({message: "Error with the verb PUT", error}, {status:500});
    }
}

export async function PATCH(req:NextRequest, {params}: {params:{id:string}}):Promise<NextResponse>{
    try{
        const {id} = params;
        const {price} = await req.json();
        const productService = container.resolve(ProductService);
        const productUpdated = await productService.updateProductPrice(parseInt(id), {price});
        if(productUpdated){
            return NextResponse.json({message: "Updated price correctly", productUpdated}, {status:200});
        }
        return NextResponse.json({message: "Error to update product"}, {status:400});
    }catch(error){
        return NextResponse.json({message: "Error with the verb PUT", error}, {status:500});
    }
}

export async function DELETE(req:NextRequest, {params}: {params: {id:string}}):Promise<NextResponse>{
    try{
        const {id} = params;
        const productService = container.resolve(ProductService);
        await productService.deleteProduct(parseInt(id));
        return NextResponse.json({message: "Deleted product correctly"});
    }catch(error){
        return NextResponse.json({message: "Error with the verb DELETE", error}, {status:500});
    }
}