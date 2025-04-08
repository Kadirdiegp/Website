import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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

const HeroSection = styled(Section)`
  background-color: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const HeroContent = styled.div`
  max-width: 600px;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: var(--text-light);
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Button = styled(Link)<{ $primary?: boolean }>`
  padding: 1rem 2rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  transition: var(--transition);
  text-align: center;
  
  ${props => props.$primary ? `
    background-color: var(--primary-color);
    color: white;
    
    &:hover {
      background-color: #357ABD;
      transform: translateY(-1px);
    }
  ` : `
    background-color: white;
    color: var(--text-color);
    border: 2px solid #E5E7EB;
    
    &:hover {
      border-color: var(--primary-color);
      color: var(--primary-color);
      transform: translateY(-1px);
    }
  `}
`;

const InfoBox = styled(motion.div)`
  background-color: white;
  border-radius: var(--border-radius);
  padding: 1.5rem;
  border: 2px solid #E5E7EB;
  margin-top: 2rem;
  transition: var(--transition);

  &:hover {
    border-color: var(--primary-color);
    transform: translateY(-2px);
  }
`;

const InfoTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--text-color);
`;

const InfoText = styled.p`
  color: var(--text-light);
  margin-bottom: 0;
`;

const HeroImage = styled(motion.div)`
  width: 100%;
  height: 500px;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageCredit = styled.div`
  font-size: 0.8rem;
  color: var(--text-light);
  text-align: right;
  margin-top: 0.5rem;
  
  a {
    color: var(--primary-color);
    &:hover {
      text-decoration: underline;
    }
  }
`;

const WelcomeSection = styled(Section)`
  background-color: #F8FAFC;
`;

const WelcomeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const WelcomeCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: var(--transition);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  }
`;

const CardIcon = styled.div`
  width: 48px;
  height: 48px;
  background: var(--primary-color);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  font-size: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
`;

const CardText = styled.p`
  color: var(--text-light);
  line-height: 1.6;
`;

const TestimonialSection = styled(Section)`
  background-color: white;
`;

const TestimonialCard = styled(motion.div)`
  background: linear-gradient(135deg, #EBF5FF 0%, #F0FDF4 100%);
  padding: 2rem;
  border-radius: var(--border-radius);
  margin-top: 3rem;
  position: relative;
  
  &::before {
    content: '"';
    position: absolute;
    top: -20px;
    left: 20px;
    font-size: 4rem;
    color: var(--primary-color);
    font-family: serif;
    opacity: 0.2;
  }
`;

const Quote = styled.blockquote`
  font-size: 1.25rem;
  color: var(--text-color);
  line-height: 1.6;
  margin: 0 0 1rem 0;
  font-style: italic;
`;

const Author = styled.p`
  color: var(--text-light);
  font-weight: 500;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: var(--text-color);
  margin-bottom: 1rem;
  text-align: center;
`;

const SectionSubtitle = styled.p`
  font-size: 1.25rem;
  color: var(--text-light);
  margin-bottom: 2rem;
  text-align: center;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Home: React.FC = () => {
  return (
    <PageContainer>
      <HeroSection>
        <Container>
          <HeroGrid>
            <HeroContent>
              <Title
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Gemeinsam für den Schutz im Sport
              </Title>
              <Subtitle
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Wir setzen uns für einen sicheren Sport ein. Bei uns finden Sie 
                Unterstützung, Beratung und ein offenes Ohr für Ihre Anliegen.
              </Subtitle>
              <ButtonGroup
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button to="/help" $primary>
                  Hilfe bekommen
                </Button>
                <Button to="/about">
                  Mehr erfahren
                </Button>
              </ButtonGroup>
              <InfoBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <InfoTitle>Wir sind für Sie da</InfoTitle>
                <InfoText>24/7 Notfall-Hotline: 0800 - 123 456 789</InfoText>
              </InfoBox>
            </HeroContent>
            <HeroImage
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img src={images.hero.url} alt={images.hero.alt} />
              <ImageCredit>{images.hero.credit}</ImageCredit>
            </HeroImage>
          </HeroGrid>
        </Container>
      </HeroSection>

      <WelcomeSection>
        <Container>
          <SectionTitle>Gemeinsam gegen sexualisierte Gewalt im Sport</SectionTitle>
          <SectionSubtitle>
            Ein Universitätsprojekt von 15 Studierenden und einem Tutor, die sich für 
            Prävention und Aufklärung einsetzen.
          </SectionSubtitle>
          <WelcomeGrid>
            <WelcomeCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <CardIcon>🛡️</CardIcon>
              <CardTitle>Prävention</CardTitle>
              <CardText>
                Entwicklung von Schutzkonzepten und Präventionsmaßnahmen für 
                Sportvereine und -verbände.
              </CardText>
            </WelcomeCard>
            <WelcomeCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <CardIcon>💪</CardIcon>
              <CardTitle>Aufklärung</CardTitle>
              <CardText>
                Sensibilisierung und Information über sexualisierte Gewalt im Sport 
                für Trainer, Athleten und Vereine.
              </CardText>
            </WelcomeCard>
            <WelcomeCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <CardIcon>🤝</CardIcon>
              <CardTitle>Unterstützung</CardTitle>
              <CardText>
                Beratung und Hilfe für Betroffene, Angehörige und 
                Sportorganisationen.
              </CardText>
            </WelcomeCard>
          </WelcomeGrid>
        </Container>
      </WelcomeSection>

      <TestimonialSection>
        <Container>
          <SectionTitle>Unser Engagement</SectionTitle>
          <SectionSubtitle>
            Als studentisches Team setzen wir uns für einen sicheren Sport ein.
          </SectionSubtitle>
          <TestimonialCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Quote>
              "Unser Ziel ist es, Sportvereine und -verbände dabei zu unterstützen, 
              sichere Räume zu schaffen. Durch Prävention, Aufklärung und konkrete 
              Hilfsangebote wollen wir dazu beitragen, sexualisierte Gewalt im Sport 
              zu verhindern."
            </Quote>
            <Author>- Das Projektteam</Author>
          </TestimonialCard>
        </Container>
      </TestimonialSection>
    </PageContainer>
  );
};

export default Home;
