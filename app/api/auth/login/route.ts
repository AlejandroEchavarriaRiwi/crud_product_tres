import "../../init";
import { NextRequest, NextResponse } from "next/server";
import { container } from "tsyringe";
import { AuthService } from "../../services/authService";
import { Auth } from "../../utils/auth";

export async function POST(req:NextRequest):Promise<NextResponse>{
    try{
        const {email,password,role_id} = await req.json();
        const authService = container.resolve(AuthService);
<<<<<<< HEAD
        await authService.loginUser(email,password);
        const tokenGenerate = Auth.generateToken({email,password,role_id});
        
        return NextResponse.json({message: "Logged user", tokenGenerate}, {status: 200});

=======
        const userLogin = await authService.loginUser(email,password);
        if(userLogin){
            const tokenGenerate = Auth.generateToken({email,password,role_id});
            return NextResponse.json({message: "Logged user", tokenGenerate}, {status: 200});
        }
        return NextResponse.json({message: "Authentication failed, User not found..."}, {status:401});
        
>>>>>>> ea19c6f35d35af7fa0069751c107b90838ee736c

    }catch(error){
        return NextResponse.json({message: "Error to login user"}, {status:500});
    }
}