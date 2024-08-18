import "../../init";
import { NextRequest, NextResponse } from "next/server";
import { container } from "tsyringe";
import { RoleService } from "../../services/roleService";

export async function GET(req: NextRequest, {params}: {params: {id:string}}):Promise<NextResponse>{
    try{
        const {id} = params;
        const roleService = container.resolve(RoleService);
        const role = await roleService.getUserById(parseInt(id));
        return NextResponse.json({message: "Role found", role}, {status: 200});

    }catch(error){
        return NextResponse.json({message: "Error to get role by id", error}, {status: 500});
    }
}

export async function PUT(req:NextRequest, {params}: {params: {id:string}}):Promise<NextResponse>{
    try{
        const {id} = params;
        const {name} = await req.json();
        if(!name) NextResponse.json({message: "Is required name param"});
        const roleService = container.resolve(RoleService);
        await roleService.updateRole(parseInt(id), {name});
        return NextResponse.json({message: "Updated Role correctly"}, {status:200});

    }catch(error){
        return NextResponse.json({message: "Error to create role", error}, {status: 500});
    }
}

export async function DELETE(req:NextRequest, {params}: {params: {id:string}}):Promise<NextResponse>{
    try{
        const {id} = params;
        if(!id) NextResponse.json({message: "Is required id param"});
        const roleService = container.resolve(RoleService);
        await roleService.deleteRole(parseInt(id));
        return NextResponse.json({message: "Deleted Role correctly"}, {status:200});

    }catch(error){
        return NextResponse.json({message: "Error to delete role", error}, {status: 500});
    }
}