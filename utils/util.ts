
import { Product } from "@/type/IProduct";


export default class Util{
    static getProducts(): Product[] | undefined{
        const products = localStorage.getItem('products') as string;
        return products ? JSON.parse(products) : []; 
    }
    static createProduct(product: Product): void{
        console.log(product);
        const getProduct: Product[] | undefined = Util.getProducts();
        getProduct!.push(product);
        localStorage.setItem('products', JSON.stringify(getProduct));
    }
    static verifyData(...fields: string[]): boolean{
        return fields.every(field=>field);
    } 
}
