import React, { useState } from 'react';
import { IProduct } from '@/types/IProduct';

interface EditProductFormProps {
  product: IProduct;
  onSave: (product: IProduct) => void;
  onCancel: () => void;
}

const EditProductForm: React.FC<EditProductFormProps> = ({ product, onSave, onCancel }) => {
  const [title, setTitle] = useState(product.title);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [url_image, setImage] = useState(product.url_image);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ ...product, title, description, price, url_image });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setPrice(value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Descripción</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Precio</label>
        <input
          type="number"
          value={price}
          onChange={handlePriceChange}
          step="0.01"
          min="0"
        />
      </div>
      <div>
        <label>Imagen URL</label>
        <input
          type="text"
          value={url_image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <button type="submit">Guardar</button>
      <button type="button" onClick={onCancel}>Cancelar</button>
    </form>
  );
};

export default EditProductForm;
