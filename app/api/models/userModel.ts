import {sql} from "@vercel/postgres";
import IUser from "../interfaces/userInterface";
import { injectable } from "inversify";

@injectable()
export class UserModel{
    async getUsers():Promise<IUser[]>{
            const prepareQuery =`
            SELECT * FROM users;
            `;
            const query = await sql.query(prepareQuery);
            return query.rows;  
    }
    async getUserByEmail(email:string):Promise<IUser | undefined>{
        const prepareQuery = `
        SELECT * FROM users
        WHERE email = $1;
        `;
        const query = await sql.query(prepareQuery,[email]);
        return query.rows[0];
    }
    async getUserByEmailPassword(user:Partial<IUser>):Promise<IUser | undefined>{
        const {email,password} = user;
        const prepareQuery = `
        SELECT * FROM users
        WHERE email = $1 AND password = $2;
        `;
        const query = await sql.query(prepareQuery,[email,password]);
        return query.rows[0];
    }
    async getUserById(user_id:number):Promise<IUser[]>{
        const prepareQuery =`
        SELECT * FROM users
        WHERE id = $1;
        `;
        const query = await sql.query(prepareQuery, [user_id]);
        return query.rows;
    }

    async createUser(user:Partial<IUser>):Promise<IUser>{
        const {email,password,role_id} = user;
        const prepareQuery = `
        INSERT INTO users (email, password, role_id)
        VALUES ($1, $2, $3);
        `;
        const query = await sql.query(prepareQuery,[email,password,role_id]);
        return query.rows[0];
    }

    async updateUser(user_id:number, newUser: Partial<IUser>):Promise<void>{
        const {email,password, role_id} = newUser;
        const prepareQuery = `
        UPDATE users 
        SET email = $1, password = $2, role_id = $3
        WHERE id = $4;
        `;
        await sql.query(prepareQuery,[email,password,role_id, user_id]);
    }
    
    async deleteUser(user_id:number):Promise<void>{
        const prepareQuery = `
        DELETE FROM users
        WHERE id = $1;
        `;
        await sql.query(prepareQuery,[user_id]);
    }
}