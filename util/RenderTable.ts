import { Product } from '@/types/IProduct';
import { getProducts } from "./productService";
import React, { useState, useEffect } from 'react';

// Define la interfaz para las props que recibe el componente.
// onProductsUpdate es una función que recibe un array de productos.
interface RenderTableProps {
  onProductsUpdate: (products: Product[]) => void;
}

// Componente funcional de React llamado RenderTable.
const RenderTable: React.FC<RenderTableProps> = ({ onProductsUpdate }) => {

  // useEffect se utiliza para realizar efectos secundarios, como la carga de datos.
  useEffect(() => {

    // Función que carga los productos desde el servicio.
    const loadProducts = () => {
      const loadedProducts = getProducts(); // Obtiene los productos usando getProducts.
      onProductsUpdate(loadedProducts); // Llama a la función onProductsUpdate pasando los productos obtenidos.
    };

    loadProducts(); // Carga los productos inmediatamente cuando el componente se monta.

    // Configura un intervalo para recargar los productos cada 5 segundos.
    const intervalId = setInterval(loadProducts, 5000);

    // Limpia el intervalo cuando el componente se desmonta para evitar fugas de memoria.
    return () => clearInterval(intervalId);
  }, [onProductsUpdate]); // El efecto depende de onProductsUpdate, por lo que se ejecutará de nuevo si cambia.

  return null; // El componente no tiene un renderizado visible, solo ejecuta la lógica.
};

export default RenderTable; // Exporta el componente para que pueda ser utilizado en otros archivos.
