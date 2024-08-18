import 'reflect-metadata';
import "../config/container"
import { container } from "tsyringe";
import { NextRequest, NextResponse } from "next/server";
import { UserService } from '../services/userService';

export async function PUT(req: NextRequest, {params}: {params: {id: string}}):Promise<NextResponse>{
    try{
        const {id} = params;
        const {email,password,role_id} = await req.json();
        const userService = container.resolve(UserService);
        await userService.updateUser(parseInt(id), {email,password,role_id});
        return NextResponse.json({message: "Updated user correctly"});
        
    }catch(error){
        return NextResponse.json({message: "Error to update user", error: error}, {status: 500});
    }
}

export async function DELETE(req:NextRequest, {params}: {params: {id:string}}):Promise<NextResponse>{
    try{
        const {id} = params;
        const userService = container.resolve(UserService);
        await userService.deleteUser(parseInt(id));
        return NextResponse.json({message: "Deleted user correctly"});       
    }catch(error){
        return NextResponse.json({message: "Error to delete user", error: error}, {status: 500});
    }
}