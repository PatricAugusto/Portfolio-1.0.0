// src/components/ProjectsSection.jsx
import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../styles/breakpoints';

// Importe suas imagens de projeto aqui
import AutenticacaoImg from '../assets/images/projects/Autenticacao.jpeg'; 
import dashboardProjectImg from '../assets/images/projects/ChronoSynth.jpeg';
import todoAppProjectImg from '../assets/images/projects/HabitTracker.jpeg';

const StyledProjects = styled.section`
  padding: 6rem 2rem;
  background-color: #0A0B1A;
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.laptop}) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ProjectCard = styled.div`
  background-color: #1B1C30;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(0, 255, 192, 0.2);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;

  @media (max-width: ${breakpoints.mobileL}) {
    height: 180px;
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  text-align: left;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 1.2rem;
  }
`;

const ProjectTitle = styled.h4`
  font-size: 1.5rem;
  color: #FAFAFA;
  margin-bottom: 0.8rem;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.3rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #E0E0E0;
  margin-bottom: 1.2rem;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 0.9rem;
  }
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  background-color: #3A3B50;
  color: #00FFC0;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  color: #00FFC0;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  transition: color 0.3s ease;
  &:hover {
    color: #FF0077;
  }
  svg {
    width: 18px;
    height: 18px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 0.9rem;
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Sistema de autentição",
      description: "Um sistema de autenticação robusto",
      image: AutenticacaoImg,
      tags: ["React", "Styled Components", "Vite", "React Router DOM"],
      demoLink: "https://sistema-de-autenticacao-wine.vercel.app/",
      repoLink: "https://github.com/PatricAugusto/Sistema-de-autenticacao"
    },
    {
      id: 2,
      title: "ChronoSynth",
      description: "Gerenciador de Tarefas e Foco Temporal",
      image: dashboardProjectImg,
      tags: ["React", "Zustand", "CSS"],
      demoLink: "https://chrono-synth-gerenciador-de-tarefas.vercel.app/",
      repoLink: "https://github.com/PatricAugusto/ChronoSynth-Gerenciador-de-Tarefas-e-Foco-Temporal"
    },
    {
      id: 3,
      title: "Dashboard de Dados Demográficos",
      description: "Projetado para visualizar dados demográficos fictícios do Brasil, como população total, distribuição regional e por faixa etária.",
      image: todoAppProjectImg, 
      tags: ["React", "Styled Components", "Chart.js / React Chart.js 2", "Local Storage API", "Font Awesome"],
      demoLink: "https://dashboard-interativo-com-graficos.vercel.app/",
      repoLink: "https://github.com/PatricAugusto/Dashboard-Interativo-com-Graficos"
    }
  ];

  return (
    <StyledProjects id="projects">
      <SectionTitle>Meus Projetos</SectionTitle>
      <ProjectsGrid>
        {projects.map(project => (
          <ProjectCard key={project.id}>
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectTags>
                {project.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
              </ProjectTags>
              <ProjectLinks>
                <ProjectLink href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  Ver Demo
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9V7h2v10zm4 0h-2V7h2v10z"/></svg>
                </ProjectLink>
                <ProjectLink href={project.repoLink} target="_blank" rel="noopener noreferrer">
                  Repositório
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.08-.731.084-.716.084-.716 1.192.085 1.815 1.229 1.815 1.229 1.063 1.815 2.809 1.29 3.493.987.108-.767.419-1.29.762-1.583-2.665-.3-5.466-1.333-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.524.118-3.176 0 0 1.008-.322 3.301 1.23C11.109 5.393 12.051 5.275 13 5.275s1.891.118 2.753.327c2.292-1.552 3.3-1.23 3.3-1.23.653 1.653.242 2.873.118 3.176.77.84 1.236 1.911 1.236 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.56 21.79 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                </ProjectLink>
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </StyledProjects>
  );
};

export default ProjectsSection;