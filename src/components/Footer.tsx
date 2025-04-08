import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterWrapper = styled.footer`
  background-color: #1A1A1A;
  color: white;
  padding: 4rem 2rem;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: white;
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.8rem;
  }

  a {
    color: #B3B3B3;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: white;
    }
  }
`;

const Copyright = styled.div`
  max-width: 1200px;
  margin: 2rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #B3B3B3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  a {
    color: #B3B3B3;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: white;
    }
  }
`;

const DeveloperInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  a {
    color: var(--primary-color);
    font-weight: 500;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterSection>
          <h3>Kinderschutzbund</h3>
          <ul>
            <li><Link to="/about">Über uns</Link></li>
            <li><Link to="/services">Unsere Dienste</Link></li>
            <li><Link to="/projects">Projekte</Link></li>
            <li><Link to="/contact">Kontakt</Link></li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>Hilfe & Support</h3>
          <ul>
            <li><Link to="/help">Hilfe bekommen</Link></li>
            <li><Link to="/emergency">Notfälle</Link></li>
            <li><Link to="/faq">Häufige Fragen</Link></li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>Rechtliches</h3>
          <ul>
            <li><Link to="/privacy">Datenschutz</Link></li>
            <li><Link to="/imprint">Impressum</Link></li>
            <li><Link to="/terms">AGB</Link></li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>Kontakt</h3>
          <ul>
            <li>Telefon: 0800 - 123 456 789</li>
            <li>E-Mail: info@kinderschutzbund.de</li>
            <li>24/7 Notfall-Hotline</li>
          </ul>
        </FooterSection>
      </FooterContainer>
      <Copyright>
        <div>© {new Date().getFullYear()} Kinderschutzbund. Alle Rechte vorbehalten.</div>
        <DeveloperInfo>
          Entwickelt von{' '}
          <a href="https://rodriguez-digital.de/" target="_blank" rel="noopener noreferrer">
            Kadir Diego Padin Rodriguez
          </a>
        </DeveloperInfo>
      </Copyright>
    </FooterWrapper>
  );
};

export default Footer;
