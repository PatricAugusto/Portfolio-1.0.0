// src/components/Header.jsx
import React from 'react'; // Remova o useState daqui, ele virá via props
import styled from 'styled-components';
import { breakpoints } from '../styles/breakpoints'; // Certifique-se de importar os breakpoints

const StyledHeader = styled.header`
  background-color: #1B1C30;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 1000;
  /* Removidas as propriedades de overflow e position: relative */

  @media (max-width: ${breakpoints.tablet}) {
    padding: 1rem 1.5rem;
  }
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  color: #00FFC0;
  margin: 0;
  /* Removido position: relative e z-index */

  span {
    color: #FAFAFA;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.5rem;
  }
`;

// Oculta a navegação padrão em telas menores e mostra em telas maiores
const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 2rem;
  }
  li a {
    color: #E0E0E0;
    font-size: 1.1rem;
    transition: color 0.3s ease;
    &:hover {
      color: #00FFC0;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none; /* Oculta a navegação padrão em mobile */
  }
`;

// Componente para o ícone do hambúrguer
const HamburgerIcon = styled.div`
  display: none; /* Oculta por padrão */
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  cursor: pointer;
  z-index: 1100; /* Garante que esteja acima do menu */

  div {
    width: 30px;
    height: 3px;
    background-color: #00FFC0;
    border-radius: 5px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    &:first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex; /* Mostra o ícone em mobile */
  }
`;

// Componente para o menu mobile que aparece
const MobileMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1B1C30;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  z-index: 999; /* Abaixo do ícone do hambúrguer */

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  li a {
    color: #FAFAFA;
    font-size: 1.8rem;
    text-transform: uppercase;
    font-weight: bold;
    transition: color 0.3s ease;
    &:hover {
      color: #00FFC0;
    }
  }
`;

const Header = ({ menuOpen, setMenuOpen }) => {
  const handleLinkClick = () => {
    setMenuOpen(false); // Fecha o menu ao clicar em um link
  };

  return (
    <StyledHeader>
      <Logo><span>Patric Augusto</span></Logo>

      {/* Navegação para desktop */}
      <Nav>
        <ul>
          <li><a href="#hero">Início</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </Nav>

      {/* Ícone do Hambúrguer para mobile */}
      <HamburgerIcon open={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        <div />
        <div />
        <div />
      </HamburgerIcon>

      {/* Menu Mobile */}
      <MobileMenu open={menuOpen}>
        <ul>
          <li><a href="#hero" onClick={handleLinkClick}>Início</a></li>
          <li><a href="#about" onClick={handleLinkClick}>Sobre</a></li>
          <li><a href="#projects" onClick={handleLinkClick}>Projetos</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contato</a></li>
        </ul>
      </MobileMenu>
    </StyledHeader>
  );
};

export default Header;