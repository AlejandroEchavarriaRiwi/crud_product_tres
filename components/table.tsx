import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getProducts } from '../util/productService';
import { Product } from '@/type/IProduct';


export const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  border-radius: 8px;
  overflow: hidden;
`;

export const StyledThead = styled.thead`
  background-color: #f8f9fa;
`;

export const StyledTh = styled.th`
  padding: 16px;
  text-align: left;
  font-weight: 600;
  color: #495057;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 0.5px;
  border-bottom: 2px solid #dee2e6;
`;

export const StyledTd = styled.td`
  padding: 16px;
  vertical-align: middle;
  color: #212529;
  border-bottom: 1px solid #dee2e6;
  transition: background-color 0.3s ease;

  &:first-child {
    font-weight: 500;
  }
`;

export const StyledTr = styled.tr`
  &:hover {
    background-color: #f1f3f5;
  }

  &:last-child td {
    border-bottom: none;
  }
`;

export const StyledImg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

export const StyledPrice = styled.span`
  font-weight: 600;
  color: #28a745;
`;

export const StyledId = styled.span`
  font-size: 12px;
  color: #6c757d;
  background-color: #e9ecef;
  padding: 2px 6px;
  border-radius: 4px;
`;
const ProductTable: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Función para cargar productos del localStorage
    const loadProducts = () => {
      const loadedProducts = getProducts();
      setProducts(loadedProducts);
    };

    const addExampleProduct = () => {
      const newProduct: Product = {
        id: Date.now(), // Usar timestamp como ID temporal
        title: 'Nuevo Producto',
        description: 'Descripción del nuevo producto',
        price: 99.99,
        image: 'https://example.com/image.jpg',
      };

      // Usar el estado previo para actualizar correctamente la lista
      setProducts((prevProducts) => [...prevProducts, newProduct]);
    };

    // Cargar productos inicialmente
    loadProducts();

    // Configurar un intervalo para actualizar la tabla periódicamente
    const intervalId = setInterval(loadProducts, 5000); // Actualiza cada 5 segundos

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []);

  return (
    <StyledTable>
      <StyledThead>
        <StyledTr>
          <StyledTh>ID</StyledTh>
          <StyledTh>Nombre</StyledTh>
          <StyledTh>Descripción</StyledTh>
          <StyledTh>Imagen</StyledTh>
          <StyledTh>Precio</StyledTh>
        </StyledTr>
      </StyledThead>
      <tbody>
        {products.map((product: Product) => (
          <StyledTr key={product.id}>
            <StyledTd><StyledId>{product.id}</StyledId></StyledTd>
            <StyledTd>{product.title}</StyledTd>
            <StyledTd>{product.description}</StyledTd>
            <StyledTd>
              <StyledImg
                src={product.image}
                alt={product.title}
              />
            </StyledTd>
            <StyledTd>
              <StyledPrice>${product.price.toFixed(2)}</StyledPrice>
            </StyledTd>
          </StyledTr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default ProductTable;
