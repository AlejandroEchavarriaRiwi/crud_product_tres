import { NextRequest, NextResponse } from "next/server";
import "../../init";
import { container } from "tsyringe";
import { AuthService } from "../../services/authService";
import { Auth } from "../../utils/auth";

export async function POST(req:NextRequest):Promise<NextResponse>{
    try{
        const {email,password,role_id} = await req.json();
        const authService = container.resolve(AuthService);
        await authService.loginUser(email,password);
        const tokenGenerate = Auth.generateToken({email,password,role_id});
        return NextResponse.json({message: "User found", tokenGenerate}, {status: 200});


    }catch(error){
        return NextResponse.json({message: "Error to login user"}, {status:500});
    }
}