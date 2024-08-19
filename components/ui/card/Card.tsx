import React from "react";
import { // trayendo cada etiqueta para imprementar estilo
  CardContainer,
  CardImage,
  CardContent,
  CardTitle,
  CardPrice,
  CardButton,
  Cards,
} from "@/controllers/stylos.componets/StyleComponetsCard"; // trayendo interface para cards de el archivo stylos de componentes donde defino el stylo con etiquetas nuevas

const Card: React.FC<Cards> = ({ precio, titulo, image }) => {
  return ( // estructura de el contenedor dinamico
    <CardContainer>
      <CardImage src={image} alt={titulo} />
      <CardContent>
        <CardTitle>{titulo}</CardTitle>
        <CardPrice>${precio}</CardPrice>
      </CardContent>
      <CardButton>Ver Detalles</CardButton>
    </CardContainer>

  );
};

export default Card;
