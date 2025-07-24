// src/components/Footer.jsx
import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #0A0B1A;
  color: #3A3B50;
  text-align: center;
  padding: 2rem 1rem;
  border-top: 1px solid #3A3B50;
  font-size: 0.9rem;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <StyledFooter>
      <p>&copy; {currentYear} Patric Augusto. Todos os direitos reservados.</p>
      <p>Desenvolvido com <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" style={{ color: '#00BFFF' }}>React</a> e <a href="https://styled-components.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#FF0077' }}>Styled Components</a>.</p>
    </StyledFooter>
  );
};

export default Footer;