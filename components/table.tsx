import React, { useState, useCallback, useEffect } from 'react';
import { IProduct } from '@/types/IProduct';
import '../styles/tablestyle.css';
import { Util } from '../utils/util';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import Button from './ui/form/button/buttonComponent';
import inputAlert from './ui/alert/alert';
import { useRouter } from 'next/navigation';

const Table: React.FC = () => {
    const [productsKeys,setProductsKeys] = useState<string[]>([]);
    const [products, setProducts] = useState<IProduct[]>([]);
    const router = useRouter();

    useEffect(()=>{
        Util.fetchApi('/api/products', {method: 'GET'})
        .then(data=>{
            const keys = Object.keys(data.products[0]);
            setProducts(data.products);
            setProductsKeys(keys);
        })
    },[]);

    const handleDeleteProduct = async(productId:number) =>{
        const confirmed = confirm("Are you sure?"); //Use swal for show modal for delete
        if(!confirmed)return;
        await Util.fetchApi(`/api/products/${productId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const newProducts = products.filter(product => product.id !== productId);
        setProducts(newProducts);
        inputAlert("Product deleted", "success");
    }   
    const handleEditProduct = async(productId: number | undefined) => {
        if (productId === undefined) return;
        router.push(`/dashboard/editproduct/?id=${productId}`)
      }
   return (
    <table>
        <thead>
            <tr>
                <td>id</td>
                <td>Image</td>
                <td>Title</td>
                <td>Description</td>
                <td>Quantity</td>
                <td>Price</td>
                <td>Function</td>
            </tr>
        </thead>
        <tbody>
            {products.map((product:IProduct)=>(
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>
                        <img src={product.url_image ? 
                            product.url_image 
                            :"https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png"}>
                        </img>
                    </td>
                    <td>{product.title}</td>
                    <td>{product.description}</td>
                    <td>{product.quantity}</td>
                    <td>{product.price}</td>
                    <td>
                        <Button 
                        type='button'
                        value='Edit'
                        onClick={()=>handleEditProduct(product.id)}/>
                        <Button
                        type='submit'
                        value='Delete'
                        onClick={()=>handleDeleteProduct(product.id)}
                        />
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
   );
};

export default Table;
