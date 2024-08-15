'use client'
import './sytlosForm/form.css'
import Util from "@/utils/util";
import React, { FormEvent, useEffect, useState } from "react";

export default function Form() {
    const [urlImage, setUrlImage] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [price, setPrice] = useState<number>(0.0);

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const product_id = Date.now();
        Util.createProduct({id:product_id,title, description, price, image: urlImage});
        console.log({message: "Product created"});
    }

    return (
        <form className="form" onSubmit={handleSubmit}>

            <div className="form-title">
                <h2 className="title">Create product</h2>
            </div>
            <fieldset className="form-url">
                <label className="url-label" htmlFor="url-input">Url image:</label>
                <input 
                    id="url-input"
                    className="url-input" 
                    type="text" 
                    value={urlImage}
                    onChange={(e) => setUrlImage(e.target.value)}
                />
            </fieldset>
            <fieldset className="form-title">
                <label className="title-label" htmlFor="title-input">Title:</label>
                <input 
                    id="title-input"
                    className="title-input" 
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </fieldset>
            <fieldset className="form-description">
                <label className="description-label" htmlFor="description-input">Description:</label>
                <input 
                    id="description-input"
                    className="description-input" 
                    type="text" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </fieldset>
            <fieldset className="form-price">
                <label className="price-label" htmlFor="price-input">Price:</label>
                <input 
                    id="price-input"
                    className="price-input" 
                    type="number" 
                    value={price}
                    onChange={(e) => {
                        const value = parseFloat(e.target.value);
                        if (!isNaN(value)) {
                            setPrice(value);
                        }
                    }}
                />
            </fieldset>
            <button className="form-button" type="submit">Enviar</button>
        </form>

    )
}   


