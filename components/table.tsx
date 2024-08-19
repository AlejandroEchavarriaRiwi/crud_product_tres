import React, { useState, useCallback, useEffect } from 'react';
import { IProduct } from '@/types/IProduct';
import '../styles/tablestyle.css';
import { Util } from '../utils/util';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import Button from './ui/form/button/buttonComponent';


const Table: React.FC = () => {
    const [productsKeys,setProductsKeys] = useState<string[]>([]);
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(()=>{
        Util.fetchApi('/api/products', {method: 'GET'})
        .then(data=>{
            const keys = Object.keys(data.products[0]);
            setProducts(data.products);
            setProductsKeys(keys);
        })
    },[]);


    const handleDeleteProduct = (event:React.ChangeEvent<HTMLButtonElement>) =>{
        const id = event.target.getAttribute('data-id');
        console.log(id);
    }

   return (
    <table>
        <thead>
            <tr>
                {productsKeys.map((key: string, index:number) => (
                    <th key={index}>{key}</th>
                ))}
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
                    <td>{product.user_id}</td>
                    <td>

                        <Button 
                        data-id={product.id}
                        type='button'
                        value='Edit'
                        />
                        <Button
                        data-id={product.id}
                        type='submit'
                        value='Delete'
                        onChange={handleDeleteProduct}
                        />
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
   );
};

export default Table;
