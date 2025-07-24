// src/App.jsx
import React, { useState } from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import Header from './components/Header';
import Container from './components/Container';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// 1. Importe a imagem de fundo aqui
import backgroundImage from './assets/images/background.jpg'; 

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* 2. Passe a imagem importada como uma prop para GlobalStyle */}
      <GlobalStyle menuOpen={menuOpen} bgImage={backgroundImage} /> 
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Container>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;