import { IProduct } from "@/types/IProduct";
// import React, { useEffect } from 'react';

// // Definición de la interfaz para las props del componente
// interface RenderTableProps {
//     onProductsUpdate: (products: IProduct[]) => void;
// }

// Clase Util para manejar operaciones con productos
export class Util {
    static getProducts(): IProduct[] {
        const products = localStorage.getItem('products');
        return products ? JSON.parse(products) : [];
    }

    static createProduct(product: IProduct): void {
        try {
            const products = Util.getProducts();
            products.push(product);
            localStorage.setItem('products', JSON.stringify(products));
            console.log({ message: "Created product correctly" });
        } catch (error) {
            console.log({ message: "Error with the method createProduct", error });
        }
    }

    static verifyData(...fields: string[]): boolean {
        return fields.every(field => field.trim() !== '');
    }
}

// Componente RenderTable
// const RenderTable: React.FC<RenderTableProps> = ({ onProductsUpdate }) => {
//     useEffect(() => {
//         const loadProducts = () => {
//             const loadedProducts = Util.getProducts();
//             onProductsUpdate(loadedProducts);
//         };

//         loadProducts();
//         const intervalId = setInterval(loadProducts, 5000);

//         return () => clearInterval(intervalId);
//     }, [onProductsUpdate]);

//     return null;
// };

// export default RenderTable;