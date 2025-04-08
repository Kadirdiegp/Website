import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { images } from '../data/images';

const PageContainer = styled.div`
  padding-top: 80px;
`;

const Section = styled.section`
  padding: 4rem 2rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: var(--text-color);
  margin-bottom: 2rem;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: var(--text-light);
  margin-bottom: 4rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--text-color);
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ImageCredit = styled.div`
  font-size: 0.8rem;
  color: var(--text-light);
  text-align: right;
`;

const Projects: React.FC = () => {
  return (
    <PageContainer>
      <Section>
        <Container>
          <Title>Unsere Projekte</Title>
          <Subtitle>
            Aktuelle Initiativen und Projekte zur Prävention von sexualisierter 
            Gewalt im Sport.
          </Subtitle>

          <ProjectsGrid>
            {images.sports.map((sport, index) => (
              <ProjectCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <ProjectImage>
                  <img src={sport.url} alt={sport.alt} />
                  <ImageCredit>{sport.credit}</ImageCredit>
                </ProjectImage>
                <ProjectContent>
                  <ProjectTitle>
                    {index === 0 && "Sichere Trainingsumgebung"}
                    {index === 1 && "Präventionskonzepte"}
                    {index === 2 && "Aufklärungskampagne"}
                  </ProjectTitle>
                  <ProjectDescription>
                    {index === 0 && `
                      Entwicklung von Richtlinien und Standards für eine sichere 
                      Trainingsumgebung in Sportvereinen.
                    `}
                    {index === 1 && `
                      Erarbeitung von Präventionskonzepten gemeinsam mit 
                      Sportverbänden und Vereinen.
                    `}
                    {index === 2 && `
                      Sensibilisierungskampagne für Trainer, Athleten und 
                      Sportorganisationen.
                    `}
                  </ProjectDescription>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </Container>
      </Section>
    </PageContainer>
  );
};

export default Projects;
