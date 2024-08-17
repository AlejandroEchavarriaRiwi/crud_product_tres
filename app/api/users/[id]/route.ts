import {sql} from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, {params}:{params:{id:string}}){
    const id = params.id;
    try{
        if(!id)throw new Error("Is required id");
        const query=
        await sql `SELECT * FROM users WHERE id = ${id};`;

        if(query.rowCount === 0){
            return NextResponse.json({message: "User not found"}, {status: 404});
        }
        return NextResponse.json({user: query.rows}, {status: 200});


    }catch(error){
        return NextResponse.json({error}, {status: 500});
    }
}