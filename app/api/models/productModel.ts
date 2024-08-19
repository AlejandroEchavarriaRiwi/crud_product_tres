import { sql } from "@vercel/postgres";
import { injectable } from "tsyringe";
import { IProduct } from "../interfaces/productInterface";

@injectable()
export class ProductModel{

    async getProducts():Promise<IProduct[]>{
        const query = await sql.query("SELECT * FROM products");
        return query.rows;
    }
    async getProductById(product_id:number):Promise<IProduct[]>{
        const prepareQuery = `
        SELECT * FROM products
        WHERE id = $1;
        `;
        const query = await sql.query(prepareQuery,[product_id]);
        return query.rows;
    }
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
    async updateProduct(product_id:number, product: Partial<IProduct>):Promise<IProduct[]>{
        const {title,description,price,user_id,cart_id} = product;
        const prepareQuery = `
        UPDATE products
        SET title=$1, description=$2, price=$3, user_id=$4, cart_id=$5
        WHERE id = $6;
        `;
        const query = await sql.query(prepareQuery,[title,description,price,user_id,cart_id,product_id]);
        return query.rows;
    }
    async updateProductDescriptionPrice(product_id:number, product:Partial<IProduct>):Promise<IProduct[]>{
        const {description,price} = product;
        const prepareQuery = `
        UPDATE products
        SET description=$1, price=$2
        WHERE id = $3;
        `
        const query = await sql.query(prepareQuery,[description,price,product_id]);
        return query.rows;
    }
    async deleteProduct(product_id:number):Promise<void>{
        const prepareQuery = `
        DELETE FROM products
        WHERE id = $1
        `;
        await sql.query(prepareQuery,[product_id]);
    }
}