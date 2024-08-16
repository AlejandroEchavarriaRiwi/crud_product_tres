import { IProduct } from "@/types/IProduct";



export default class Util{
    static getProducts(): IProduct[] | undefined{
        const products = localStorage.getItem('products') as string;
        return products ? JSON.parse(products) : []; 
    }
    static createProduct(product: IProduct): void{
        try{
            const getProduct: IProduct[] | undefined = Util.getProducts();
            getProduct!.push(product);
            localStorage.setItem('products', JSON.stringify(getProduct));
            console.log({message: "Created product correctly"});
        }catch(error){
            console.log({message: "Error with the method createProduct", error});
        }
    }
    static verifyData(...fields: string[]): boolean{
        return fields.every(field=>field);
    }
}