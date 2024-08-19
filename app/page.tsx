"use client";
import "../app/globals.css";
import React, { useEffect } from "react";
import Card from "@/components/card/Card";
import styled from "styled-components";
import Image from "next/image";
import Navbar from "@/components/ui/navbar/Navbar";


//dando estilo al conteneedor principal de las cards
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
  margin-bottom: 20px;
`;
//titulo para est contenedor dinamico (herramientas para una clase de articulo)
const TituloH2 = styled.h2`
  text-align: center;
  margin-top: 20px;
`;

export default function Home() {
  useEffect(() => {
    localStorage.removeItem('token');
}, []);
  return (
    
    <main className="flex flex-col">
      <Navbar/>
      <div className="flex flex-col">

        <TituloH2>HERRAMIENTAS</TituloH2>
        <Container>
          <Card
            precio={19.99}
            titulo="Producto Ejemplo"
            image="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE-1200x800.jpg"
          />

          <Card
            precio={19.99}
            titulo="Producto Ejemplo"
            image="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE-1200x800.jpg"
          />
          <Card
            precio={19.99}
            titulo="Producto Ejemplo"
            image="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE-1200x800.jpg"
          />

          <Card
            precio={19.99}
            titulo="Producto Ejemplo"
            image="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE-1200x800.jpg"
          />

          <Card
            precio={19.99}
            titulo="Producto Ejemplo"
            image="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE-1200x800.jpg"
          />

          <Card
            precio={19.99}
            titulo="Producto Ejemplo"
            image="https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE-1200x800.jpg"
          />
        </Container>
      </div>
    </main>
  );
}
