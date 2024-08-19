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
        const {url_image,title,description,price,quantity,user_id} = product;
        const prepareQuery = `
        INSERT INTO products
        (url_image,title,description,price,quantity,user_id)
        VALUES ($1,$2,$3,$4,$5,$6);
        `;
        const query = await sql.query(prepareQuery,[url_image,title,description,price,quantity,user_id]);
        return query.rows;
    }
    async updateProduct(product_id:number, product: Partial<IProduct>):Promise<IProduct[]>{
        const {url_image,title,description,price,quantity,user_id} = product;
        const prepareQuery = `
        UPDATE products
        SET url_image=$1, title=$2, description=$3, quantity=$4, user_id=$5, price=$6
        WHERE id = $7;
        `;
        const query = await sql.query(prepareQuery,[url_image,title,description,quantity,user_id,price, product_id]);
        return query.rows;
    }
    async updatePrice(product_id:number, product:Partial<IProduct>):Promise<IProduct[]>{
        const {price} = product;
        const prepareQuery = `
        UPDATE products
        SET price=$1
        WHERE id = $2;
        `
        const query = await sql.query(prepareQuery,[price,product_id]);
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