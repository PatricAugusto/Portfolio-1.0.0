// src/components/ContactSection.jsx
import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../styles/breakpoints'; // Certifique-se de importar os breakpoints

const StyledContact = styled.section`
  padding: 6rem 2rem;
  background-color: #0A0B1A; /* Fundo diferente para alternar com a seção anterior */
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

const ContactContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2.5rem; /* Adicione um padding um pouco maior para o formulário/links */
  background-color: #1B1C30; /* Fundo para o "card" da seção de contato */
  border-radius: 10px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3); /* Sombra inicial */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transição para a animação */

  font-size: 1.15rem;
  color: #E0E0E0;

  /* Animação de hover similar aos cards de projeto e seção Sobre Mim */
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(0, 255, 192, 0.2); /* Sombra neon no hover */
  }

  p {
    margin-bottom: 1.5rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 1.8rem;
    font-size: 1rem;
  }
`;

const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #00FFC0;
    font-size: 1.1rem;
    transition: color 0.3s ease, transform 0.3s ease;
    &:hover {
      color: #FF0077;
      transform: translateY(-5px);
    }
    svg {
      width: 40px;
      height: 40px;
      margin-bottom: 0.5rem;
    }
  }

  @media (max-width: ${breakpoints.mobileL}) {
    gap: 1.5rem;
    a {
      font-size: 1rem;
      svg {
        width: 35px;
        height: 35px;
      }
    }
  }
`;

const ContactSection = () => {
  return (
    <StyledContact id="contact">
      <SectionTitle>Entre em Contato</SectionTitle>
      <ContactContent>
        <p>Gostaria de discutir um projeto, uma oportunidade de trabalho ou apenas dizer olá? Fique à vontade para entrar em contato!</p>
        <ContactLinks>
          <a href="desenvolvedorpatric@gmail.com">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/></svg>
            Email
          </a>
          <a href="https://www.linkedin.com/in/patric-augusto-bab47b240/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 6.75A1.75 1.75 0 1 1 8.25 5 1.75 1.75 0 0 1 6.5 6.75zM19 19h-3v-5.09c0-1.2-.42-2.03-1.55-2.03-1.57 0-2.04 1.17-2.04 2.03V19H10V8h3v1.81c.54-.78 1.48-1.57 3.38-1.57 2.47 0 4.09 1.6 4.09 4.79V19z"/></svg>
            LinkedIn
          </a>
          <a href="https://github.com/PatricAugusto" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.08-.731.084-.716.084-.716 1.192.085 1.815 1.229 1.815 1.229 1.063 1.815 2.809 1.29 3.493.987.108-.767.419-1.29.762-1.583-2.665-.3-5.466-1.333-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.524.118-3.176 0 0 1.008-.322 3.301 1.23C11.109 5.393 12.051 5.275 13 5.275s1.891.118 2.753.327c2.292-1.552 3.3-1.23 3.3-1.23.653 1.653.242 2.873.118 3.176.77.84 1.236 1.911 1.236 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.56 21.79 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
        </ContactLinks>
      </ContactContent>
    </StyledContact>
  );
};

export default ContactSection;