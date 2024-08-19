'use client';
import React, { useState } from "react";
import styled from 'styled-components';
import { IProduct } from "@/types/IProduct";
import {Util} from "@/utils/util";
import inputAlert from "@/components/ui/alert/alert";



export default function Form(): JSX.Element {
    const initialProduct: IProduct = {
        id:0,
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
        <form className="form-container" onSubmit={handleSubmit}>
        <legend className="form-legend">Add product</legend>
        <fieldset className="form-fieldset">
            <label className="form-label">Url image</label>
            <input
                className="form-input"
                type="text"
                name="url_image"
                value={product.url_image}
                onChange={handleChange}
            />
        </fieldset>
        <fieldset className="form-fieldset">
            <label className="form-label">Title</label>
            <input
                className="form-input"
                type="text"
                name="title"
                value={product.title}
                onChange={handleChange}
            />
        </fieldset>
        <fieldset className="form-fieldset">
            <label className="form-label">Description</label>
            <textarea
                className="form-textarea"
                name="description"
                placeholder="Description"
                value={product.description}
                onChange={handleChange}
            ></textarea>
        </fieldset>
        <fieldset className="form-fieldset">
            <label className="form-label">Price</label>
            <input
                className="form-input"
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
            />
        </fieldset>
        <fieldset className="form-fieldset">
            <label className="form-label">Quantity</label>
            <input
                className="form-input"
                type="number"
                name="quantity"
                value={product.quantity}
                onChange={handleChange}
            />
        </fieldset>
        <button className="form-button" type="submit">Add</button>
    </form>
    
    )
}