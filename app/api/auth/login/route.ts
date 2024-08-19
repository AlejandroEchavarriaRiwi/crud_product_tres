import "../../init";
import { NextRequest, NextResponse } from "next/server";
import { container } from "tsyringe";
import { AuthService } from "../../services/authService";
import { Auth } from "../../utils/auth";

export async function POST(req:NextRequest):Promise<NextResponse>{
    try{
        const {email,password,role_id} = await req.json();
        const authService = container.resolve(AuthService);
        const userLogin = await authService.loginUser(email,password);
        if(userLogin){
            const tokenGenerate = Auth.generateToken({email,password,role_id});
            return NextResponse.json({message: "Logged user", tokenGenerate}, {status: 200});
        }
        return NextResponse.json({message: "Authentication failed"}, {status:401});
        

    }catch(error){
        return NextResponse.json({message: "Error to login user"}, {status:500});
    }
}