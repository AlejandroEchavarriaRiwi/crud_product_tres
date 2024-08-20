"use client";
import Input from "@/components/ui/form/input/inputComponent";
import TextArea from "@/components/ui/form/textarea/textareaComponent";
import Button from "@/components/ui/form/button/buttonComponent";
import { useEffect, useState } from "react";
import { Util } from "@/utils/util";
import { IProduct } from "@/types/IProduct";
import inputAlert from "@/components/ui/alert/alert";
import { useRouter } from "next/navigation";

export default function EditProductView() {
    const initialProduct: IProduct = {
        id: 0,
        url_image: "",
        title: "",
        description: "",
        price: 0,
        quantity: 0,
        user_id: 0
    };
    const [product, setProduct] = useState<IProduct>(initialProduct);
    const router = useRouter();
    
    const productId = parseInt(new URLSearchParams(window.location.search).get("id") as string);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        const data = await Util.fetchApi(`/api/products/${productId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });

        if (!data) {
            inputAlert("Product not updated", "error");
            return;
        }

        inputAlert("Product updated", "success");
        router.push("/dashboard"); // Redirigir al dashboard después de la actualización
    };

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <h2>Edit Product</h2>
                <fieldset>
                    <label>Url_image</label>
                    <Input
                        type="text"
                        value={product.url_image || ""}
                        name="url_image"
                        onChange={handleChange}
                    />
                </fieldset>
                <fieldset>
                    <label>Title</label>
                    <Input
                        type="text"
                        value={product.title || ""}
                        name="title"
                        onChange={handleChange}
                    />
                </fieldset>
                <fieldset>
                    <label>Description</label>
                    <TextArea
                        value={product.description || ""}
                        name="description"
                        onChange={handleChange}
                    />
                </fieldset>
                <fieldset>
                    <label>Price</label>
                    <Input
                        type="number"
                        value={product.price.toString() || ""}
                        name="price"
                        onChange={handleChange}
                    />
                </fieldset>
                <fieldset>
                    <label>Quantity</label>
                    <Input
                        type="number"
                        value={product.quantity.toString() || ""}
                        name="quantity"
                        onChange={handleChange}
                    />
                </fieldset>
                <Button type="submit" value="Edit" />
            </form>
        </main>
    );
}
