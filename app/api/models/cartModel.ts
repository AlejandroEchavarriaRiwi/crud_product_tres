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
        const {date,quantity} = cart;
        const prepareQuery = `
        INSERT INTO carts 
        (date,quantity)
        VALUES ($1,$2);
        `;
        const query = await sql.query(prepareQuery,[date,quantity]);
        return query.rows;
    }
    async updateCart(cart_id:number, newCart:Partial<ICart>):Promise<void>{
        const {date,quantity} = newCart;
        const prepareQuery = `
        UPDATE carts SET
        date = $1, quantity = $2
        WHERE id = $3;
        `
        await sql.query(prepareQuery,[date,quantity,cart_id]);
    }
    async updateCartQuantity(cart_id:number, quantity:number):Promise<void>{
        const prepareQuery =`
        UPDATE carts SET
        quantity = $1
        WHERE id = $1
        `
        await sql.query(prepareQuery,[quantity,cart_id]);
    }
}