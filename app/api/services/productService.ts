import { inject, injectable } from "tsyringe";
import { ProductModel } from "../models/productModel";
import { IProduct } from "../interfaces/productInterface";

@injectable()
export class ProductService{
    constructor(@inject(ProductModel) private productModel: ProductModel){}
    async createProduct(product: Partial<IProduct>):Promise<IProduct>{
        return await this.productModel.createProduct(product);

    }
}