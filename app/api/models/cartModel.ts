import { injectable } from "tsyringe";
import ICart from "../interfaces/cartInterface";
import { sql } from "@vercel/postgres";

@injectable()
export class CartModel{

    async getCarts():Promise<ICart[]>{
        const query = await sql.query("SELECT * FROM carts")
        return query.rows;
    }
    async getCartById(cart_id:number):Promise<ICart[]>{
        const prepareQuery =`
        SELECT * FROM carts
        WHERE id = $1
        `;
        const query = await sql.query(prepareQuery,[cart_id]);
        return query.rows;
    }
    async createCart(cart:Partial<ICart>):Promise<ICart[]>{
        const {product_id} = cart;
        const prepareQuery = `
        INSERT INTO carts 
        (product_id)
        VALUES ($1);
        `;
        const query = await sql.query(prepareQuery,[product_id]);
        return query.rows;
    }
    async updateCart(cart_id:number, newCart:Partial<ICart>):Promise<ICart[]>{
        const {product_id} = newCart;
        const prepareQuery = `
        UPDATE carts SET
        date = $1, quantity = $2
        WHERE id = $3;
        `
        const query = await sql.query(prepareQuery,[product_id,cart_id]);
        return query.rows;
    }
    async updateCartProductId(cart_id:number, product_id:number):Promise<ICart[]>{
        const prepareQuery =`
        UPDATE carts 
        SET product_id=$1
        WHERE id = $2
        `
        const query = await sql.query(prepareQuery,[product_id,cart_id]);
        return query.rows;
    }
    async deleteCart(cart_id:number):Promise<ICart[]>{
        const prepareQuery =`
        DELETE FROM carts
        WHERE id = $1
        `;
        const query = await sql.query(prepareQuery,[cart_id]);
        return query.rows;
    }
}