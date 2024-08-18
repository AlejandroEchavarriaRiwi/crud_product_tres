import React, { useState, useCallback} from 'react';
import { Util } from '../utils/util';
import { IProduct } from '@/types/IProduct';
import '../styles/tablestyle.css';
import DeleteIcon from './ui/icons/delete';
import ModifyIcon from './ui/icons/modify';
import EditProductForm from './ui/icons/modifyform';
import RenderTable from '../utils/util';

const ProductTable: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [editingProduct, setEditingProduct] = useState<IProduct | null>(null);

  const handleProductsUpdate = useCallback((updatedProducts: IProduct[]) => {
    setProducts(prevProducts => {
      if (JSON.stringify(prevProducts) !== JSON.stringify(updatedProducts)) {
        return updatedProducts;
      }
      return prevProducts;
    });
  }, []);


  const handleDelete = (id: number) => {
    const confirmed = window.confirm("¿Estás seguro de que deseas eliminar este producto?");
    if (confirmed) {
      const updatedProducts = products.filter((product) => product.id !== id);
      setProducts(updatedProducts);
    }
  };

  const handleEdit = (product: IProduct) => {
    setEditingProduct(product);
  };

  const handleSave = (updatedProduct: IProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);
    setEditingProduct(null);
  };

  const handleCancel = () => {
    setEditingProduct(null);
  };

  return (
    <>
     <RenderTable onProductsUpdate={handleProductsUpdate} />
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
