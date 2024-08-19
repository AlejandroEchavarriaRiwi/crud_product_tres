import "../../init";
import { NextRequest, NextResponse } from "next/server";
import { container } from "tsyringe";
import { CartService } from "../../services/cartService";

export async function GET(req:NextRequest,{params}:{params:{id:string}}):Promise<NextResponse>{
    try{
        const {id} = params;
        const cartService = container.resolve(CartService);
        const cart = await cartService.getCartById(parseInt(id));
        return NextResponse.json({message: "Cart found", cart}, {status:200});
    }catch(error){
        return NextResponse.json({message: "Error with the verb GET", error},{status:500});
    }
}

export async function PUT(req:NextRequest, {params}: {params: {id:string}}):Promise<NextResponse>{
    try{
        const {id} = params;
        const {date,quantity} = await req.json();
        const cartService = container.resolve(CartService);
        const cartUpdated = await cartService.updateCart(parseInt(id), {date,quantity});
        if(cartUpdated){
            return NextResponse.json({message: "Updated cart correctly"}, {status:200});
        }
        return NextResponse.json({message: "Error to update cart"}, {status:400});
    }catch(error){
        return NextResponse.json({message: "Error with hte verb PUT", error}, {status:500});
    }
}

export async function PATCH(req:NextRequest, {params}: {params: {id:string}}):Promise<NextResponse>{
    try{
        const {id} = params;
        const {quantity} = await req.json();
        const cartService = container.resolve(CartService);
        const cartUpdated = await cartService.updateCartQuantity(parseInt(id), quantity);
        if(cartUpdated){
            return NextResponse.json({message: "Updated quantity correctly"}, {status:200});
        }
        return NextResponse.json({message: "Error to update quantity"}, {status:400});
    }catch(error){
        return NextResponse.json({message: "Error with hte verb PUT", error}, {status:500});
    }
}
