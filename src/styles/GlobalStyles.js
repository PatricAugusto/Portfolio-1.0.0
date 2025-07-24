// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';
import { breakpoints } from './breakpoints';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #0A0B1A;
    color: #E0E0E0;
    line-height: 1.6;
    overflow-x: hidden;

    /* --- ESTILOS PARA IMAGEM DE FUNDO --- */
    /* Use a prop bgImage que será passada */
    background-image: url(${props => props.bgImage}); 
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    /* --- FIM ESTILOS PARA IMAGEM DE FUNDO --- */

    position: relative; 

    &:after {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(10, 11, 26, 0.75);
      z-index: -1;
    }

    ${({ menuOpen }) => menuOpen && `
      @media (max-width: ${breakpoints.tablet}) {
        overflow-y: hidden;
      }
    `}
  }

  a {
    color: #00FFC0;
    text-decoration: none;
    &:hover {
      color: #FF0077;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    color: #FAFAFA;
  }
`;