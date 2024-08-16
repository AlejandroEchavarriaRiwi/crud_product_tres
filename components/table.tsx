import React, { useState, useEffect } from 'react';
import { getProducts } from '../util/productService';
import { Product } from '@/type/IProduct';
import '../styles/tablestyle.css';
import DeleteIcon from './ui/icons/delete';
import ModifyIcon from './ui/icons/modify';
import EditProductForm from './ui/icons/modifyform';

const ProductTable: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleDelete = (id: number) => {
    const confirmed = window.confirm("¿Estás seguro de que deseas eliminar este producto?");
    if (confirmed) {
      const updatedProducts = products.filter((product) => product.id !== id);
      setProducts(updatedProducts);
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
  };

  const handleSave = (updatedProduct: Product) => {
    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);
    setEditingProduct(null); // Cierra el formulario después de guardar
  };

  const handleCancel = () => {
    setEditingProduct(null);
  };

  return (
    <>
      {editingProduct && (
        <EditProductForm
          product={editingProduct}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}

      <table className="styled-table">
        <thead className="styled-thead">
          <tr className="styled-tr">
            <th className="styled-th">ID</th>
            <th className="styled-th">Nombre</th>
            <th className="styled-th">Descripción</th>
            <th className="styled-th">Imagen</th>
            <th className="styled-th">Precio</th>
            <th className="styled-th">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: Product) => (
            <tr className="styled-tr" key={product.id}>
              <td className="styled-td"><span className="styled-id">{product.id}</span></td>
              <td className="styled-td">{product.title}</td>
              <td className="styled-td">{product.description}</td>
              <td className="styled-td">
                <img
                  src={product.image}
                  alt={product.title}
                  className="styled-img"
                />
              </td>
              <td className="styled-td">
                <span className="styled-price">${product.price.toFixed(2)}</span>
              </td>
              <td className="styled-td">
                <ModifyIcon onClick={() => handleEdit(product)} />
                <DeleteIcon onClick={() => handleDelete(product.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ProductTable;
