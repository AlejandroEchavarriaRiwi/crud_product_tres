import React, { useState, useCallback } from 'react';
import { IProduct } from '@/types/IProduct';
import '../styles/tablestyle.css';
import DeleteIcon from './ui/icons/delete';
import ModifyIcon from './ui/icons/modify';
import RenderTable from '../utils/util';
import { StyledTable, StyledThead, StyledTh, StyledTd, StyledTr, StyledImg, StyledPrice, StyledId } from './TableStyles/TablesStyles';
import styled from 'styled-components';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import Snackbar from './TableStyles/SnackBar';

// Estos estilos adicionales los mantenemos aquí ya que son específicos de la funcionalidad de edición
const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 2px solid #009879;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #009879;
  color: white;
  border: none;
  padding: 5px 10px;
  margin: 0 5px;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #007d63;
  }
`;

const ProductTable: React.FC = () => {
   // Almacena la lista de productos.
   const [products, setProducts] = useState<IProduct[]>([]);

   // Controla el ID del producto que actualmente se está editando.
   const [editingId, setEditingId] = useState<number | null>(null);

   // Almacena los datos del producto que se está editando.
   const [editedProduct, setEditedProduct] = useState<IProduct | null>(null);

   // Controla la visibilidad de la snackbar que aparece cuando un producto se actualiza.
   const [snackbarVisible, setSnackbarVisible] = useState(false);

    // Actualiza la lista de productos si hay cambios.
    const handleProductsUpdate = useCallback((updatedProducts: IProduct[]) => {
        setProducts(prevProducts =>
            JSON.stringify(prevProducts) !== JSON.stringify(updatedProducts)
                ? updatedProducts
                : prevProducts
        );
    }, []);

    // Elimina un producto de la lista tras confirmación.
    const handleDelete = async (id: number) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        });

        if (result.isConfirmed) {
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
            setProducts(products.filter((product) => product.id !== id));
        }
    };


    // Activa el modo de edición para un producto.
    const handleEdit = (product: IProduct) => {
        setEditingId(product.id);
        setEditedProduct({ ...product });
    };

    // Guarda los cambios realizados en un producto.
    const handleSave = () => {
        if (editedProduct) {
            setProducts(products.map((product) =>
                product.id === editedProduct.id ? editedProduct : product
            ));
            setEditingId(null);
            setEditedProduct(null);
            showSnackbar();
        }
    };

    // Cancela la edición de un producto.
    const handleCancel = () => {
        setEditingId(null);
        setEditedProduct(null);
    };

    // Actualiza el valor de un campo específico del producto editado.
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof IProduct) => {
        if (editedProduct) {
            setEditedProduct({ ...editedProduct, [field]: e.target.value });
        }
    };

    const showSnackbar = () => {
        setSnackbarVisible(true);
        setTimeout(() => {
            setSnackbarVisible(false);
        }, 3000); // La snackbar desaparecerá después de 3 segundos
    };


    return (
        <>
            <RenderTable onProductsUpdate={handleProductsUpdate} />
            <StyledTable>
                <StyledThead>
                    <StyledTr>
                        <StyledTh>ID</StyledTh>
                        <StyledTh>Nombre</StyledTh>
                        <StyledTh>Descripción</StyledTh>
                        <StyledTh>Imagen</StyledTh>
                        <StyledTh>Precio</StyledTh>
                        <StyledTh>Acciones</StyledTh>
                    </StyledTr>
                </StyledThead>
                <tbody>
                    {products.map((product: IProduct) => (
                        <StyledTr key={product.id}>
                            <StyledTd><StyledId>{product.id}</StyledId></StyledTd>
                            <StyledTd>
                                {/* Update input Tittle */}
                                {editingId === product.id ? (
                                    <Input
                                        value={editedProduct?.title}
                                        onChange={(e) => handleChange(e, 'title')}
                                    />
                                ) : (
                                    product.title
                                )}
                            </StyledTd>
                            <StyledTd>
                                {/* Update input description */}
                                {editingId === product.id ? (
                                    <Input
                                        value={editedProduct?.description}
                                        onChange={(e) => handleChange(e, 'description')}
                                    />
                                ) : (
                                    product.description
                                )}
                            </StyledTd>
                            <StyledTd>
                                {/* Change the field of the image */}
                                {editingId === product.id ? (
                                    <>
                                        <Input
                                            value={editedProduct?.url_image}
                                            onChange={(e) => handleChange(e, 'url_image')}
                                            placeholder="Ingrese URL de la imagen"
                                        />
                                        {editedProduct?.url_image && (
                                            <StyledImg src={editedProduct.url_image} alt={editedProduct.title} style={{ marginTop: '10px' }} />
                                        )}
                                    </>
                                ) : (
                                    <StyledImg src={product.url_image} alt={product.title} />
                                )}
                            </StyledTd>
                            <StyledTd>
                                {/* Update input price */}
                                {editingId === product.id ? (
                                    <Input
                                        value={editedProduct?.price}
                                        onChange={(e) => handleChange(e, 'price')}
                                        type="number"
                                    />
                                ) : (
                                    <StyledPrice>${product.price}</StyledPrice>
                                )}
                            </StyledTd>
                            <StyledTd>
                                {editingId === product.id ? (
                                    <>
                                        <Button onClick={handleSave}>Guardar</Button>
                                        <Button onClick={handleCancel}>Cancelar</Button>
                                    </>
                                ) : (
                                    <>
                                        <Button onClick={() => handleEdit(product)}><ModifyIcon /></Button>
                                        <Button onClick={() => handleDelete(product.id)}><DeleteIcon /></Button>
                                    </>
                                )}
                            </StyledTd>
                        </StyledTr>
                    ))}
                </tbody>
            </StyledTable>
            <Snackbar visible={snackbarVisible}>
                ¡Producto actualizado correctamente!
            </Snackbar>
        </>
    );
};

export default ProductTable;
