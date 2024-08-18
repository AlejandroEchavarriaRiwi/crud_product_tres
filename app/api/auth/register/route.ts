import { NextRequest, NextResponse } from "next/server";
import { container } from "tsyringe";
import { AuthService } from "../../services/authService";
import { Auth } from "../../utils/auth";

export async function POST(req:NextRequest):Promise<NextResponse>{
    try{
        const {email,password,role_id=2} = await req.json();
        const authService = container.resolve(AuthService);
        await authService.registerUser({email,password,role_id});
        const token = Auth.generateToken({email,password,role_id});
        return NextResponse.json({message: "Registered user correctly", token},{status:201});

    }catch(error){
        return NextResponse.json({message: "Error to register user"}, {status: 500});
    }
}