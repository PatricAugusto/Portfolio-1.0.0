// src/components/HeroSection.jsx
import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../styles/breakpoints';

// Importa a imagem como um módulo. O Vite/Webpack processará isso.
import meuPerfilImg from '../assets/images/perfil.png';

const StyledHero = styled.section`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
  background-image: linear-gradient(rgba(10, 11, 26, 0.8), rgba(10, 11, 26, 0.8)), url('/path-to-your-background-image.jpg');
  background-size: cover;
  background-position: center;
  overflow: hidden;
  position: relative;

  @media (max-width: ${breakpoints.tablet}) {
    height: auto;
    min-height: 70vh;
    padding: 4rem 1.5rem;
  }
`;

const HeroProfilePicture = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #00FFC0;
  box-shadow: 0 0 20px rgba(0, 255, 192, 0.7);
  margin-bottom: 2rem;
  z-index: 10;
  
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(0, 255, 192, 0.9);
  }

  @media (max-width: ${breakpoints.laptop}) {
    width: 130px;
    height: 130px;
    margin-bottom: 1.5rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100px;
    height: 100px;
    margin-bottom: 1rem;
    border: 3px solid #00FFC0;
    box-shadow: 0 0 15px rgba(0, 255, 192, 0.7);
  }
`;

const HeroTitle = styled.h2`
  font-size: 4rem;
  color: #FAFAFA;
  margin-bottom: 1rem;
  position: relative;
  z-index: 10;

  span {
    color: #00FFC0;
  }

  @media (max-width: ${breakpoints.laptop}) {
    font-size: 3rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 2.5rem;
  }

  @media (max-width: ${breakpoints.mobileL}) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  color: #E0E0E0;
  margin-bottom: 2rem;
  position: relative;
  z-index: 10;

  @media (max-width: ${breakpoints.laptop}) {
    font-size: 1.25rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.1rem;
  }

  @media (max-width: ${breakpoints.mobileL}) {
    font-size: 1rem;
  }
`;

const CallToActionButton = styled.a`
  display: inline-block;
  background-color: #00FFC0;
  color: #0A0B1A;
  padding: 1rem 2.5rem;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;
  position: relative;
  z-index: 10;

  &:hover {
    background-color: #FF0077;
    transform: translateY(-3px);
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
`;

const HeroSection = () => {
  return (
    <StyledHero id="hero">
      {/* Agora, passamos a variável importada 'meuPerfilImg' para o src */}
      <HeroProfilePicture src={meuPerfilImg} alt="Sua Foto de Perfil" />

      <HeroTitle>Olá, eu sou o <span>Patric</span></HeroTitle>
      <HeroSubtitle>Desenvolvedor Front-end | React | UI/UX Enthusiast</HeroSubtitle>
      <CallToActionButton href="#projects">Ver Meus Projetos</CallToActionButton>
    </StyledHero>
  );
};

export default HeroSection;