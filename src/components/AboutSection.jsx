// src/components/AboutSection.jsx
import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../styles/breakpoints'; // Certifique-se de importar os breakpoints

const StyledAbout = styled.section`
  padding: 6rem 2rem;
  background-color: #1B1C30;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 4rem 1.5rem;
  }
`;

const SectionTitle = styled.h3`
  font-size: 2.5rem;
  color: #00BFFF;
  margin-bottom: 3rem;
  position: relative;
  &:after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background-color: #00FFC0;
    margin: 10px auto 0;
    border-radius: 2px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem; /* Adicione padding para o conteúdo não colar nas bordas do "card" */
  background-color: #0A0B1A; /* Fundo para o "card" da seção sobre mim */
  border-radius: 10px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3); /* Sombra inicial */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transição para a animação */

  font-size: 1.15rem;
  line-height: 1.8;
  color: #E0E0E0;
  p {
    margin-bottom: 1.5rem;
  }

  /* Animação de hover similar aos cards de projeto */
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(0, 255, 192, 0.2); /* Sombra neon no hover */
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 1.5rem;
    font-size: 1rem;
  }
`;

const AboutSection = () => {
  return (
    <StyledAbout id="about">
      <SectionTitle>Sobre Mim</SectionTitle>
      <AboutContent>
        <p>Sou um desenvolvedor front-end apaixonado por criar experiências de usuário intuitivas e visualmente atraentes. Tenho experiência em construir aplicações web robustas e escaláveis usando **React, Bibliotecas de estilização, JavaScript (ES6+), HTML5 e CSS3**.</p>
        <p>Minha paixão pelo desenvolvimento vai além do código; adoro resolver problemas complexos e aprender novas tecnologias. No meu tempo livre, gosto de acampar e buscar uma maior conexão com a natureza.</p>
        <p>Estou sempre em busca de novos desafios e oportunidades para contribuir com equipes inovadoras e projetos impactantes. Vamos conversar sobre como posso ajudar!</p>
      </AboutContent>
    </StyledAbout>
  );
};

export default AboutSection;