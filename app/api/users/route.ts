import 'reflect-metadata';
import { NextRequest, NextResponse } from "next/server";
import {UserService} from "./services/userService";
import  "./config/container";
import { container } from 'tsyringe';
import { Util } from '@/utils/util';

export async function GET():Promise<NextResponse>{ // Create function for method GET - Endpoint
    try{
        const userService = container.resolve(UserService); // Resolve instance UserService
        const users = await userService.getUsers(); 
        return NextResponse.json({users});
    }catch(error){
        return NextResponse.json({message: "Error to find the users"}, {status:404});
    }
}

export async function POST(req: NextRequest): Promise<NextResponse | undefined>{
    try{
        const {email,password,role_id} = await req.json();
        const dataVerify = Util.verifyData(email,password,role_id);
        
        if(!dataVerify){
            NextResponse.json({message: "Is required all params for create user"});
            return;
        }
        const userService = container.resolve(UserService);
        const userCreated = await userService.createUser({email,password,role_id});
        NextResponse.json({userCreated})     
    }catch(error){
        NextResponse.json({message: "Error to create user", error: error}, {status: 500});
    }
}

