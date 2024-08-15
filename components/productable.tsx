"use client";
import React from 'react';
import styled from 'styled-components';

// Definir la interfaz Product
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

// Definir los estilos con styled-components
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 16px;
  text-align: left;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Thead = styled.thead`
  background-color: #009879;
  color: #ffffff;
`;

const Tbody = styled.tbody``;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f3f3f3;
  }

  &:hover {
    background-color: #ddd;
  }
`;

const Th = styled.th`
  padding: 12px 15px;
  font-weight: bold;
`;

const Td = styled.td`
  padding: 12px 15px;
  border-bottom: 1px solid #dddddd;
  vertical-align: middle;
`;

const ProductImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
`;

// Componente principal
const ProductTable = ({ products }: { products: Product[] }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Image</Th>
          <Th>Title</Th>
          <Th>Description</Th>
          <Th>Price</Th>
        </Tr>
      </Thead>
      <Tbody>
        {products.map((product) => (
          <Tr key={product.id}>
            <Td>{product.id}</Td>
            <Td>
              <ProductImage src={product.image} alt={product.title} />
            </Td>
            <Td>{product.title}</Td>
            <Td>{product.description}</Td>
            <Td>${product.price.toFixed(2)}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default ProductTable;


