import { injectable } from "tsyringe";
import IRole from "../interfaces/roleInterface";
import { sql } from "@vercel/postgres";

@injectable()
export class RoleModel{

    async getUsers():Promise<IRole[]>{
        const prepareQuery = `
        SELECT * FROM roles;
        `
        const query = await sql.query(prepareQuery);
        return query.rows;
    }

    async getUserById(role_id:number):Promise<IRole[]>{
        const prepareQuery = `
        SELECT * FROM roles
        WHERE id = $1;
        `
        const query = await sql.query(prepareQuery, [role_id]);
        return query.rows;
    }
    async createRole(role:Partial<IRole>):Promise<IRole[]>{
        const {name} = role;
        const prepareQuery =`
        INSERT INTO roles (name)
        VALUES ($1);
        `;
        const query = await sql.query(prepareQuery,[name]);
        return query.rows;
    }

    async updateRole(role_id:number, newRole: Partial<IRole>):Promise<void>{
        const {name} = newRole;
        const prepareQuery = `
        UPDATE roles
        SET name = $1
        WHERE id = $2;
        `;
        await sql.query(prepareQuery,[name,role_id]);
    }
}