import "../init";
import { NextRequest, NextResponse } from "next/server";
import { container } from "tsyringe";
import { CartService } from "../services/cartService";

export async function GET():Promise<NextResponse>{
    try{
        const cartService = container.resolve(CartService);
        const carts = await cartService.getCarts();
        return NextResponse.json({carts}, {status:200});
    }catch(error){
        return NextResponse.json({message: "Error with the verb GET",error}, {status:500});
    }
};

export async function POST(req:NextRequest):Promise<NextResponse>{
    try{
        const {product_id} = await req.json();
        const cartService = container.resolve(CartService);
        const cartCreated = await cartService.createCart({product_id});   
        return NextResponse.json({message: "Created cart correctly", cartCreated}, {status:201});
    }catch(error){
        return NextResponse.json({message: "Error with the verb POST", error}, {status:500});
    }
}