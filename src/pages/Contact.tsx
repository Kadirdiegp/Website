import React, { useState } from 'react';
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  background: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 500;
  color: var(--text-color);
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const Textarea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const Button = styled(motion.button)`
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #357abd;
  }
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--text-color);
  margin-bottom: 1.5rem;
`;

const InfoItem = styled.div`
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoLabel = styled.h4`
  font-size: 1.1rem;
  color: var(--text-color);
  margin-bottom: 0.5rem;
`;

const InfoText = styled.p`
  color: var(--text-light);
  line-height: 1.6;
`;

const EmergencyBox = styled.div`
  background: linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%);
  color: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  margin-top: 2rem;
`;

const EmergencyTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const EmergencyText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier würde die Logik für das Senden des Formulars implementiert werden
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <PageContainer>
      <Section>
        <Container>
          <Title>Kontakt</Title>
          <Subtitle>
            Haben Sie Fragen oder benötigen Sie Unterstützung? Wir sind für Sie da 
            und helfen Ihnen gerne weiter.
          </Subtitle>

          <ContactGrid>
            <ContactInfo>
              <InfoTitle>So erreichen Sie uns</InfoTitle>
              
              <InfoItem>
                <InfoLabel>Adresse</InfoLabel>
                <InfoText>
                  Musterstraße 123<br />
                  12345 Musterstadt
                </InfoText>
              </InfoItem>

              <InfoItem>
                <InfoLabel>E-Mail</InfoLabel>
                <InfoText>info@kinderschutzbund-sport.de</InfoText>
              </InfoItem>

              <InfoItem>
                <InfoLabel>Telefon</InfoLabel>
                <InfoText>+49 (0) 123 456789</InfoText>
              </InfoItem>

              <EmergencyBox>
                <EmergencyTitle>24/7 Notfall-Hotline</EmergencyTitle>
                <EmergencyText>
                  In dringenden Fällen erreichen Sie uns rund um die Uhr unter:<br />
                  <strong>0800 - 123 456 789</strong>
                </EmergencyText>
              </EmergencyBox>
            </ContactInfo>

            <ContactForm
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">E-Mail</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="message">Nachricht</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <Button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Nachricht senden
              </Button>
            </ContactForm>
          </ContactGrid>
        </Container>
      </Section>
    </PageContainer>
  );
};

export default Contact;
