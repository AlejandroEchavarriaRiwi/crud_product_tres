import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f9f9f9;
  }

  h1 {
    text-align: center;
    color: #333;
  }
`;

export default GlobalStyles;
