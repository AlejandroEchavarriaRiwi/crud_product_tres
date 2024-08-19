import { inject, injectable } from "tsyringe";
import { CartModel } from "../models/cartModel";
import ICart from "../interfaces/cartInterface";

@injectable()
export class CartService{
    constructor(@inject(CartModel) private cartModel: CartModel){}

    async getCarts():Promise<ICart[]>{
        return await this.cartModel.getCarts();
    }
    async getCartById(cart_id:number):Promise<ICart[]>{
        return await this.cartModel.getCartById(cart_id);
    }
    async createCart(cart:Partial<ICart>):Promise<ICart[]>{
        return await this.cartModel.createCart(cart);
    }
    async updateCart(cart_id:number, cart: Partial<ICart>):Promise<ICart[]>{
        return await this.cartModel.updateCart(cart_id,cart);
    }
    async updateCartProductId(cart_id:number, product_id: number):Promise<ICart[]>{
        return await this.cartModel.updateCartProductId(cart_id,product_id);
    }
    async deleteCart(cart_id:number):Promise<ICart[]>{
        return await this.cartModel.deleteCart(cart_id);
    }
}