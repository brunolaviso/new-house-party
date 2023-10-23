import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Sintony', sans-serif;
    color: #404951;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Sofia', cursive;
    color: #529471;
  }

  a {
    text-decoration: none;
    color: #404951;
  }
`;