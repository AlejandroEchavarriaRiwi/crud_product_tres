'use client';
import React, { useState } from "react";
import styled from 'styled-components';
import { IProduct } from "@/types/IProduct";
import {Util} from "@/utils/util";
import inputAlert from "@/components/alert/alert";
import Button from "./button/buttonComponent";
import Input from "./input/inputComponent";
import Textarea from "./textarea/textareaComponent";

const primaryColor = "rgba(0, 166, 77, 1)";
const primaryColorHover = "rgba(0, 166, 77, 0.8)";

const StyledForm = styled.form`
    background-color: #ffffff;
    padding: 30px;
    width: 100%;
    max-width: 500px;
    margin: 130px auto;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border: 2px solid ${primaryColor};
`;

const StyledLegend = styled.legend`
    font-size: 24px;
    font-weight: bold;
    color: ${primaryColor};
    margin-bottom: 20px;
    text-align: center;
`;

const StyledFieldset = styled.fieldset`
    border: none;
    padding: 0;
    margin-bottom: 20px;
`;

const StyledLabel = styled.label`
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: ${primaryColor};
`;

const StyledInput = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid ${primaryColor};
    border-radius: 4px;
    font-size: 16px;

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px ${primaryColorHover};
    }
`;

const StyledTextArea = styled.textarea`
    width: 100%;
    padding: 10px;
    border: 1px solid ${primaryColor};
    border-radius: 4px;
    font-size: 16px;
    resize: vertical;

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px ${primaryColorHover};
    }
`;

const StyledButton = styled.button`
    width: 100%;
    padding: 12px;
    background-color: ${primaryColor};
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${primaryColorHover};
    }
`;

export default function Form(): JSX.Element {
    const initialProduct: IProduct = {
        url_image: "",
        title: "",
        description: "",
        price:0,
        quantity:0,
        user_id:0
    };
    const [product, setProduct] = useState<IProduct>(initialProduct);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value
        });
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        const data = await Util.fetchApi("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        })
        if(!data){
            inputAlert("Product not created", "error");
            return;
        }
        inputAlert("Product created", "success");
        console.log({data});
    }
    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledLegend>Add product</StyledLegend>
            <StyledFieldset>
                <StyledLabel>Url image</StyledLabel>
                <Input
                    type="text"
                    name="url_image"
                    value={product.url_image} 
                    onChange={handleChange}
                />
            </StyledFieldset>
            <StyledFieldset>
                <StyledLabel>Title</StyledLabel>
                <Input 
                    type="text" 
                    name="title"
                    value={product.title} 
                    onChange={handleChange}
                />
            </StyledFieldset>
            <StyledFieldset>
                <StyledLabel>Description</StyledLabel>
                <Textarea 
                    name="description"
                    placeholder="Description" 
                    value={product.description} 
                    onChange={handleChange} 
                />
            </StyledFieldset>
            <StyledFieldset>
                <StyledLabel>Price</StyledLabel>
                <Input 
                    type="number" 
                    name="price"
                    value={product.price} 
                    onChange={handleChange}
                />
            </StyledFieldset>
            <StyledFieldset>
                <StyledLabel>Quantity</StyledLabel>
                <Input 
                    type="number" 
                    name="quantity"
                    value={product.quantity} 
                    onChange={handleChange}
                />
            </StyledFieldset>
            <Button
            type="submit"
            value="Add"
            />
        </StyledForm>
    )
}