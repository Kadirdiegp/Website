import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const TeamCard = styled(motion.div)`
  background: white;
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const TeamTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--text-color);
  margin-bottom: 1rem;
`;

const TeamDescription = styled.p`
  color: var(--text-light);
  line-height: 1.6;
`;

const ProjectDescription = styled.div`
  background: linear-gradient(135deg, #EBF5FF 0%, #F0FDF4 100%);
  padding: 3rem;
  border-radius: var(--border-radius);
  margin-bottom: 4rem;

  h2 {
    font-size: 2rem;
    color: var(--text-color);
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.1rem;
    color: var(--text-light);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 1rem;
      padding-left: 1.5rem;
      position: relative;

      &::before {
        content: "•";
        color: var(--primary-color);
        font-size: 1.5rem;
        position: absolute;
        left: 0;
        top: -0.2rem;
      }
    }
  }
`;

const About: React.FC = () => {
  return (
    <PageContainer>
      <Section>
        <Container>
          <Title>Über unser Projekt</Title>
          <Subtitle>
            Ein studentisches Projekt zur Sensibilisierung und Prävention von sexualisierter Gewalt im Sport
          </Subtitle>

          <ProjectDescription>
            <h2>Unser Fokus: Sexualisierte Gewalt im Sport</h2>
            <p>
              Dieses Projekt wurde im Rahmen einer universitären Initiative entwickelt, 
              um auf das wichtige Thema der sexualisierten Gewalt im Sport aufmerksam zu machen 
              und Präventionsmaßnahmen zu fördern.
            </p>
            <p>Unsere Hauptziele sind:</p>
            <ul>
              <li>Aufklärung über sexualisierte Gewalt im Sportkontext</li>
              <li>Entwicklung von Präventionsstrategien</li>
              <li>Unterstützung für Betroffene und Angehörige</li>
              <li>Sensibilisierung von Trainern, Vereinen und Sportverbänden</li>
              <li>Schaffung sicherer Räume im Sport</li>
            </ul>
          </ProjectDescription>

          <Title>Unsere Teams</Title>
          <TeamGrid>
            <TeamCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <TeamTitle>Recherche & Analyse</TeamTitle>
              <TeamDescription>
                Unser Team recherchiert aktuelle Studien und Statistiken zum Thema sexualisierte 
                Gewalt im Sport und analysiert bestehende Präventionsmaßnahmen.
              </TeamDescription>
            </TeamCard>

            <TeamCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <TeamTitle>Konzeption & Strategie</TeamTitle>
              <TeamDescription>
                Entwicklung von Konzepten und Strategien zur Prävention und Intervention, 
                basierend auf den Rechercheergebnissen.
              </TeamDescription>
            </TeamCard>

            <TeamCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <TeamTitle>Digitale Umsetzung</TeamTitle>
              <TeamDescription>
                Gestaltung und Entwicklung der digitalen Plattform zur Sensibilisierung 
                und Information der Öffentlichkeit.
              </TeamDescription>
            </TeamCard>

            <TeamCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <TeamTitle>Kommunikation & Outreach</TeamTitle>
              <TeamDescription>
                Entwicklung von Kommunikationsstrategien und Aufbau von Netzwerken mit 
                Sportverbänden und Organisationen.
              </TeamDescription>
            </TeamCard>

            <TeamCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <TeamTitle>Support & Beratung</TeamTitle>
              <TeamDescription>
                Entwicklung von Unterstützungsangeboten und Beratungskonzepten für 
                Betroffene und Sportorganisationen.
              </TeamDescription>
            </TeamCard>
          </TeamGrid>
        </Container>
      </Section>
    </PageContainer>
  );
};

export default About;
