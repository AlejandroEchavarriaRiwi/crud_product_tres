import React, { useState, useEffect } from 'react';
import { IProduct } from '@/types/IProduct';
import '../styles/tablestyle.css';
import { Util } from '../utils/util';
import Button from './ui/form/button/buttonComponent';
import inputAlert from './ui/alert/alert';
import { useRouter } from 'next/navigation';

const Table: React.FC = () => {
    const [productsKeys, setProductsKeys] = useState<string[]>([]);
    const [products, setProducts] = useState<IProduct[]>([]);
    const router = useRouter();

    useEffect(() => {
        Util.fetchApi('/api/products', { method: 'GET' })
            .then(data => {
                if (data.products && data.products.length > 0) {
                    const keys = Object.keys(data.products[0]);
                    setProducts(data.products);
                    setProductsKeys(keys);
                }
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const handleDeleteProduct = async (productId: number) => {
        const confirmed = window.confirm("Are you sure?");
        if (!confirmed) return;
        try {
            await Util.fetchApi(`/api/products/${productId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
            inputAlert("Product deleted", "success");
        } catch (error) {
            console.error('Error deleting product:', error);
            inputAlert("Error deleting product", "error");
        }
    }

    const handleEditProduct = (productId: number) => {
        router.push(`/dashboard/editproduct/?id=${productId}`);
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Function</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product: IProduct) => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>
                            <img src={product.url_image || "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png"} alt={product.title} />
                        </td>
                        <td>{product.title}</td>
                        <td>{product.description}</td>
                        <td>{product.quantity}</td>
                        <td>{product.price}</td>
                        <td>
                            <Button 
                                type='button'
                                value='Edit'
                                onClick={() => product.id !== undefined && handleEditProduct(product.id)}
                            />
                            <Button
                                type='button'
                                value='Delete'
                                onClick={() => product.id !== undefined && handleDeleteProduct(product.id)}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;