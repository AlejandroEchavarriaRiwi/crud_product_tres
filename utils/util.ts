import { Product } from "@/interfaces/interfaces";

export default class Util{
    static getProducts(): Product[] | undefined{
        const products: string | null = localStorage.getItem('products');
        if(!products){
            console.log({message: "Error with getProducts"});
            return;
        }
        return JSON.parse(products); // 
    }
    static createProduct(product: Product): void{
        const getProduct: Product[] | undefined = Util.getProducts();
        getProduct!.push(product);
        localStorage.setItem('products', JSON.stringify(getProduct));
    }
}
