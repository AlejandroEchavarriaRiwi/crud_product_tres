import "../init";
import { NextRequest, NextResponse } from "next/server";
import { container } from "tsyringe";
import { RoleService } from "../services/roleService";


export async function GET(): Promise<NextResponse>{
    try{
        const roleService = container.resolve(RoleService);
        const roles = await roleService.getUser();
        return NextResponse.json({message: "Users found", roles}, {status: 200});
    }catch(error){
        return NextResponse.json({message: "Error to get users"}, {status:500});
    }
}
export async function POST(req:NextRequest):Promise<NextResponse>{
    try{
        const {name} = await req.json();
        const roleService = container.resolve(RoleService);
        const roleCreated = await roleService.createRole({name});
        return NextResponse.json({message: "Created role correctly", roleCreated}, {status: 201});

    }catch(error){
        return NextResponse.json({message: "Error to create role", error}, {status:500});
    }
}