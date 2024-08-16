import React, { useState, useEffect } from 'react';
import { Util } from '../utils/util';
import { IProduct } from '@/types/IProduct';
import '../styles/tablestyle.css';


const ProductTable: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await Util.getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <table className="styled-table">
      <thead className="styled-thead">
        <tr className="styled-tr">
          <th className="styled-th">ID</th>
          <th className="styled-th">Nombre</th>
          <th className="styled-th">Descripción</th>
          <th className="styled-th">Imagen</th>
          <th className="styled-th">Precio</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product: IProduct) => (
          <tr className="styled-tr" key={product.id}>
            <td className="styled-td"><span className="styled-id">{product.id}</span></td>
            <td className="styled-td">{product.title}</td>
            <td className="styled-td">{product.description}</td>
            <td className="styled-td">
              <img
                src={product.url_image}
                alt={product.title}
                className="styled-img"
              />
            </td>
            <td className="styled-td">
              <span className="styled-price">${product.price}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
