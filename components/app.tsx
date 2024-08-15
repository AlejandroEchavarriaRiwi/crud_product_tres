import React from 'react';
import ProductTable from '../components/productable';

const products = [
  {
    id: 1,
    title: 'Smartphone',
    description: 'A high-quality smartphone with a great camera.',
    price: 699.99,
    image: 'https://via.placeholder.com/50',
  },
  {
    id: 2,
    title: 'Laptop',
    description: 'A powerful laptop for work and gaming.',
    price: 1199.99,
    image: 'https://via.placeholder.com/50',
  },
  // Agrega más productos aquí
];

export default App;

import GlobalStyles from '../styles/globalstyle';

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <h1>Product Table</h1>
        <ProductTable products={products} />
      </div>
    </>
  );
}

