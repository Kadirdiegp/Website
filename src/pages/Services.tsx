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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(motion.div)`
  background: white;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const ServiceImage = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${ServiceCard}:hover & img {
    transform: scale(1.05);
  }
`;

const ServiceContent = styled.div`
  padding: 2rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--text-color);
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ImageCredit = styled.div`
  font-size: 0.8rem;
  color: var(--text-light);
  text-align: right;
`;

const Services: React.FC = () => {
  return (
    <PageContainer>
      <Section>
        <Container>
          <Title>Unsere Angebote</Title>
          <Subtitle>
            Wir bieten verschiedene Unterstützungsangebote im Bereich der Prävention 
            und Intervention von sexualisierter Gewalt im Sport.
          </Subtitle>

          <ServicesGrid>
            <ServiceCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ServiceImage>
                <img src={images.prevention.url} alt={images.prevention.alt} />
                <ImageCredit>{images.prevention.credit}</ImageCredit>
              </ServiceImage>
              <ServiceContent>
                <ServiceTitle>Präventionsworkshops</ServiceTitle>
                <ServiceDescription>
                  Wir bieten Workshops für Sportvereine, Trainer und Athleten an, 
                  um über sexualisierte Gewalt im Sport aufzuklären und 
                  Präventionsstrategien zu entwickeln.
                </ServiceDescription>
              </ServiceContent>
            </ServiceCard>

            <ServiceCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ServiceImage>
                <img src={images.support.url} alt={images.support.alt} />
                <ImageCredit>{images.support.credit}</ImageCredit>
              </ServiceImage>
              <ServiceContent>
                <ServiceTitle>Beratung & Unterstützung</ServiceTitle>
                <ServiceDescription>
                  Vertrauliche Beratung und Unterstützung für Betroffene, 
                  Angehörige und Sportorganisationen. Wir helfen bei der 
                  Entwicklung von Schutzkonzepten.
                </ServiceDescription>
              </ServiceContent>
            </ServiceCard>

            <ServiceCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <ServiceImage>
                <img src={images.sports[0].url} alt={images.sports[0].alt} />
                <ImageCredit>{images.sports[0].credit}</ImageCredit>
              </ServiceImage>
              <ServiceContent>
                <ServiceTitle>Sichere Sportumgebung</ServiceTitle>
                <ServiceDescription>
                  Wir unterstützen Vereine dabei, eine sichere Umgebung für alle 
                  Sportler zu schaffen. Mit Richtlinien, Verhaltenskodizes und 
                  Schulungen.
                </ServiceDescription>
              </ServiceContent>
            </ServiceCard>

            <ServiceCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <ServiceImage>
                <img src={images.team.url} alt={images.team.alt} />
                <ImageCredit>{images.team.credit}</ImageCredit>
              </ServiceImage>
              <ServiceContent>
                <ServiceTitle>Netzwerk & Zusammenarbeit</ServiceTitle>
                <ServiceDescription>
                  Wir vernetzen Sportvereine, Verbände und Experten, um gemeinsam 
                  gegen sexualisierte Gewalt im Sport vorzugehen.
                </ServiceDescription>
              </ServiceContent>
            </ServiceCard>
          </ServicesGrid>
        </Container>
      </Section>
    </PageContainer>
  );
};

export default Services;
