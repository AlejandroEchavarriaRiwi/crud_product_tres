import "../../init";
import { container } from "tsyringe";
import { NextRequest, NextResponse } from "next/server";
import { UserService } from '../../services/userService';


export async function GET(req:NextRequest, {params}: {params: {id:string}}):Promise<NextResponse>{
    try{
        const {id} = params;
        const userService = container.resolve(UserService);
        const user = await userService.getUserById(parseInt(id));
        if(user.length !== 0){
            return NextResponse.json({message: "User found", user}, {status: 200});
        }
        return NextResponse.json({message: "User not found", user}, {status: 400});

    }catch(error){
        return NextResponse.json({message: "Error with the verb GET", error}, {status: 500});
    }
}
export async function PUT(req: NextRequest, {params}: {params: {id: string}}):Promise<NextResponse>{
    try{
        const {id} = params;
        const {email,password,role_id} = await req.json();
        const userService = container.resolve(UserService);
        await userService.updateUser(parseInt(id), {email,password,role_id});
        return NextResponse.json({message: "Updated user correctly"},{status:200});
        
    }catch(error){
        return NextResponse.json({message: "Error to update user", error}, {status: 500});
    }
}

export async function DELETE(req:NextRequest, {params}: {params: {id:string}}):Promise<NextResponse>{
    try{
        const {id} = params;
        const userService = container.resolve(UserService);
        await userService.deleteUser(parseInt(id));
        return NextResponse.json({message: "Deleted user correctly"}, {status:200});       
    }catch(error){
        return NextResponse.json({message: "Error to delete user", error}, {status: 500});
    }
}