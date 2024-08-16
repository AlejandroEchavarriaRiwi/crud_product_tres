'use client';
import React, { useState } from "react";
import Input from "./input/inputComponent";
import styled from 'styled-components';
import TextArea from "./textarea/textareaComponent";
import { IProduct } from "@/types/IProduct";
import Button from "./button/buttonComponent";
import {Util} from "@/utils/util";
import inputAlert from "@/components/alert/alert";

const StyledForm = styled.form`
background-color:white;
`;

const StyledFieldset = styled.fieldset
`
`;
const StyledLabel = styled.label
`
`;

export default function Form(): JSX.Element {
    const initialProduct: IProduct = {
        id: Date.now(),
        url_image: "",
        title: "",
        description: "",
        price: 0
    };

    const [product, setProduct] = useState<IProduct>(initialProduct);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void =>{
        const {name,value} = e.target;
        setProduct({
            ...product,
            [name]: value
        });
        
    }
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        Util.createProduct(product);
        await inputAlert("Producto creado exitosamente","success");
        window.location.href = "/tablePage"
    }
    return(
        <StyledForm className="form-add-product" onSubmit={handleSubmit}>
            <legend className="product-title">Form</legend>
            <StyledFieldset className="product-url">
                <StyledLabel className="url-label">Url image</StyledLabel>
                <Input 
                className="url-input" 
                type="text"
                name="url_image"
                value={product.url_image} 
                onChange={handleChange}/>
            </StyledFieldset>
            <StyledFieldset className="product-title">
                <StyledLabel className="title-label">Title</StyledLabel>
                <Input 
                className="title-input" 
                type="text" 
                name="title"
                value={product.title} 
                onChange={handleChange}/>
            </StyledFieldset>
            <StyledFieldset className="product-description">
                <StyledLabel className="description-label">Description</StyledLabel>
                <TextArea 
                className="description-input" 
                name="description"
                placeholder="Description" 
                value={product.description} 
                onChange={handleChange} />
            </StyledFieldset>
            <StyledFieldset className="product-price">
                <StyledLabel className="price-label">Price</StyledLabel>
                <Input 
                className="price-input" 
                type="text" 
                name="price"
                value={product.price} 
                onChange={handleChange}/>
            </StyledFieldset>
            <Button type="submit" value="Send" />
        </StyledForm>
    )
}