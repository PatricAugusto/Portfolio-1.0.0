// src/components/Container.jsx
import styled from 'styled-components';
import { breakpoints } from '../styles/breakpoints'; // Importe seus breakpoints

const Container = styled.div`
  max-width: 1200px; /* Largura máxima do seu conteúdo */
  margin: 0 auto; /* Centraliza o container horizontalmente */
  padding: 0 2rem; /* Espaçamento interno para as laterais */

  @media (max-width: ${breakpoints.laptop}) {
    max-width: 960px; /* Reduz a largura máxima em laptops menores */
    padding: 0 1.5rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%; /* Em tablets, o container pode ocupar toda a largura */
    padding: 0 1rem; /* Mas ainda com um padding interno */
  }
`;

export default Container;