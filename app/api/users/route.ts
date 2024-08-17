import {sql} from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    try{
        const query=
        await sql `SELECT * FROM users;`;
        return NextResponse.json({user:query.rows}, {status: 200});
    }catch(error){
        return NextResponse.json({error}, {status: 500});
    }
}

export async function POST(req: NextRequest): Promise<NextResponse>{
    try{
        const {email,password,role_id} = await req.json();
        if(!email || !password || !role_id) throw new Error("Is required the params email,password, role_id");
        const query=
        await sql `INSERT INTO users (email,password,role_id) VALUES (${email}, ${password}, ${role_id})`
        return NextResponse.json({message: "Created user correctly", user: query.rows});
    }catch(error){
        return NextResponse.json({error}, {status: 500});
    }
}

export async function PUT(req: NextRequest): Promise<NextResponse>{
    try{
        const {id,email,password,role_id} = await req.json();
        if(!id)throw new Error("Is required id for update user");
        const prepareQuery = `
        UPDATE users 
        SET email = $1, password = $2, role_id = $3
        WHERE id = $4
        RETURNING *        
        `
        const query= await sql.query(prepareQuery,[email,password,role_id,id]);

        if(query.rowCount === 0){
            return NextResponse.json({message: "User not found"}, {status: 404});
        }
        return NextResponse.json({message: "Updated user correctly", user: query.rows});

    }catch(error){
        return NextResponse.json({error}, {status: 500});
    }
}