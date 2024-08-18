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

    async getUserById(user_id:number):Promise<IUser[]>{
        const prepareQuery =`
        SELECT * FROM users
        WHERE id = $1
        `;
        const query = await sql.query(prepareQuery, [user_id]);
        return query.rows;
    }
}