"use client";
import "../app/globals.css";
import React, { useEffect, useState } from "react";
import Card from "@/components/ui/card/Card";
import styled from "styled-components";
import Navbar from "@/components/ui/navbar/Navbar";

// Define la estructura de un producto
interface Product {
  id: string;
  user_id: string;
  price: number;
  title: string;
  url_image: string;
}

// Dando estilo al contenedor principal de las cards
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]); // Estado tipado como array de Product

  useEffect(() => {
    localStorage.removeItem('token');

    // Llamada a la API para obtener los productos
    fetch('/api/products')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.products) { // Verifica que data.products exista
          setProducts(data.products); // Asegúrate de que data.products es un array
        } else {
          console.error("Formato de datos incorrecto");
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <main className="flex flex-col">
      <Navbar />
      <div className="flex flex-col">
        <Container>
          {products.length > 0 ? (
            products.map((product) => (
              <Card
                key={product.id}  // Usamos la propiedad id del producto
                precio={product.price}  // Acceso a las propiedades correctas
                titulo={product.title}
                image={product.url_image || "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png"}  // Imagen por defecto si no existe
              />
            ))
          ) : (
            <p>No hay productos disponibles</p>
          )}
        </Container>
      </div>
    </main>
  );
}
