import { sql } from "@vercel/postgres";
import { injectable } from "tsyringe";
import { IProduct } from "../interfaces/productInterface";

@injectable()
export class ProductModel{
    async createProduct(product:Partial<IProduct>):Promise<IProduct[]>{
        const {title,description,price,user_id, cart_id} = product;
        const prepareQuery = `
        INSERT INTO products
        (title,description,price,user_id,cart_id)
        VALUES ($1,$2,$3,$4,$5);
        `;
        const query = await sql.query(prepareQuery,[title,description,price,user_id,cart_id]);
        return query.rows;
    }
}