import { Product } from "@/type/IProduct";


export function getProducts(): Product[] {
    const products = localStorage.getItem('products');
    return products ? JSON.parse(products) : [];
  }
