import React from "react";
import styled, { css, keyframes, ThemeProvider, createGlobalStyle } from "styled-components";
// Archivo: CardStyles.ts

// Definición de la interfaz para molde de parametros
export interface Cards {
    precio: number;
    titulo: string;
    image: string;
}

// Contenedor principal de la carta
export const CardContainer = styled.div`
width: 300px;
border-radius: 8px;
margin: 10px;
overflow: hidden;
box-shadow: 0 4px 8px rgba(0,0,0,0.1);
transition: transform 0.3s ease;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
&:hover {
    transform: translateY(-5px);
}
`;

// estilo para la imagen de la foto
export const CardImage = styled.img`
width: 100%;
height: 200px;
object-fit: cover;
`;

// Contenedor del contenido de la carta
export const CardContent = styled.div`
padding: 18px;
`;

// Título de la carta
export const CardTitle = styled.h2`
font-size: 1.5rem;
margin: 0 0 8px 0;
color: #333;
`;

// stylos para Precio del produto
export const CardPrice = styled.p`
font-size: 1.25rem;
font-weight: bold;
color: #546FFF;
margin: 0;
`;

// Botón de la carta para comprar o ver detalles futuro que abra modal
export const CardButton = styled.button`
display: block;
width: 100%;
padding: 10px;
background-color: #546FFF;;
color: white;
border: none;
border-radius: 0 0 8px 8px;
cursor: pointer;
transition: background-color 0.3s ease;

&:hover {
    background-color: #0056b3;
}
`;