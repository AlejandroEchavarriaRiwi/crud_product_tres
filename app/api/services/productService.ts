import { inject, injectable } from "tsyringe";
import { ProductModel } from "../models/productModel";
import { IProduct } from "../interfaces/productInterface";

@injectable()
export class ProductService{
    constructor(@inject(ProductModel) private productModel: ProductModel){}

    async getProducts():Promise<IProduct[]>{
        return await this.productModel.getProducts();
    }
    async getProductById(product_id:number):Promise<IProduct[]>{
        return await this.productModel.getProductById(product_id);
    }
    async createProduct(product: Partial<IProduct>):Promise<IProduct[]>{
        return await this.productModel.createProduct(product);
    }
    async updateProduct(product_id:number, newProduct: Partial<IProduct>):Promise<IProduct[]>{
        return await this.productModel.updateProduct(product_id, newProduct);
    }
    async updateProductPrice(product_id:number, product:Partial<IProduct>):Promise<IProduct[]>{
        return await this.productModel.updatePrice(product_id,product);
    }
    async deleteProduct(product_id:number):Promise<void>{
        await this.productModel.deleteProduct(product_id);
    }
}