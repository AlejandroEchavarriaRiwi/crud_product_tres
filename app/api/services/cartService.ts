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
    async updateCart(cart_id:number, cart: Partial<ICart>):Promise<void>{
        await this.cartModel.updateCart(cart_id,cart);
    }
    async updateCartQuantity(cart_id:number, quantity: number):Promise<void>{
        await this.cartModel.updateCartQuantity(cart_id,quantity);
    }
}