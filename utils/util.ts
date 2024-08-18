import { IProduct } from "@/types/IProduct";

export class Util {
    static getProducts(): IProduct[] {
        if (typeof window !== 'undefined') {
            const products = localStorage.getItem('products');
            return products ? JSON.parse(products) : [];
        }
        return [];
    }

    static createProduct(product: IProduct): void {
        try {
            if (typeof window !== 'undefined') {
                const products = Util.getProducts();
                products.push(product);
                localStorage.setItem('products', JSON.stringify(products));
                console.log({ message: "Created product correctly" });
            }
        } catch (error) {
            console.log({ message: "Error with the method createProduct", error });
        }
    }

    static verifyData(...fields: string[]): boolean {
        return fields.every(field => field.trim() !== '');
    }
}
