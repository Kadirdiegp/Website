import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  padding: 1rem 2rem;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)<{ $isMenuOpen?: boolean }>`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-color);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 1000;

  @media (max-width: 768px) {
    visibility: ${props => props.$isMenuOpen ? 'hidden' : 'visible'};
  }

  img {
    height: 40px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    z-index: 1100;
    overflow-y: auto;
    padding-top: 60px;
  }
`;

const MobileNavItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0;
`;

const NavItem = styled(Link)<{ $isActive?: boolean }>`
  color: ${props => props.$isActive ? '#4a90e2' : 'var(--text-color)'};
  font-weight: ${props => props.$isActive ? '600' : '500'};
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 1.1rem;
  
  &:hover {
    color: #4a90e2;
  }
  
  @media (max-width: 768px) {
    padding: 1.2rem 2rem;
    font-size: 1.2rem;
    border-bottom: 1px solid #f5f5f5;
    display: block;
    
    &:hover {
      background-color: #f9f9f9;
    }
  }
`;

const ActionButton = styled(Link)`
  background-color: #4a90e2;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.2s ease;
  text-decoration: none;
  
  &:hover {
    background-color: #3a7dbd;
  }
  
  @media (max-width: 768px) {
    margin: 2rem;
    display: block;
    text-align: center;
    padding: 1.2rem;
    width: auto;
  }
`;

const MenuButton = styled.button<{ $isMenuOpen?: boolean }>`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1200;
  padding: 0;
  margin: 0;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
  }
`;

const MenuLine = styled.span<{ $isMenuOpen?: boolean; $position?: string }>`
  display: block;
  width: 25px;
  height: 2px;
  margin: 4px 0;
  background-color: #333;
  border-radius: 3px;
  transition: all 0.3s ease;
  
  ${props => props.$isMenuOpen && props.$position === 'top' && `
    transform: rotate(45deg) translate(5px, 5px);
  `}
  
  ${props => props.$isMenuOpen && props.$position === 'middle' && `
    opacity: 0;
  `}
  
  ${props => props.$isMenuOpen && props.$position === 'bottom' && `
    transform: rotate(-45deg) translate(7px, -7px);
  `}
`;

const Navbar: React.FC = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <Nav>
      <NavContainer>
        <Logo to="/" $isMenuOpen={menuOpen}>
          <img src="/logo.png" alt="Kinderschutzbund" />
        </Logo>
        
        <NavLinks>
          <NavItem to="/" $isActive={location.pathname === '/'}>Home</NavItem>
          <NavItem to="/services" $isActive={location.pathname === '/services'}>Dienste</NavItem>
          <NavItem to="/projects" $isActive={location.pathname === '/projects'}>Projekte</NavItem>
          <NavItem to="/about" $isActive={location.pathname === '/about'}>Über uns</NavItem>
          <NavItem to="/contact" $isActive={location.pathname === '/contact'}>Kontakt</NavItem>
          <ActionButton to="/help">Hilfe bekommen</ActionButton>
        </NavLinks>
        
        <MenuButton 
          onClick={() => setMenuOpen(!menuOpen)} 
          $isMenuOpen={menuOpen}
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
        >
          <MenuLine $isMenuOpen={menuOpen} $position="top" />
          <MenuLine $isMenuOpen={menuOpen} $position="middle" />
          <MenuLine $isMenuOpen={menuOpen} $position="bottom" />
        </MenuButton>
        
        <AnimatePresence>
          {menuOpen && (
            <MobileMenu
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
            >
              <MobileNavItems>
                <NavItem to="/" $isActive={location.pathname === '/'}>Home</NavItem>
                <NavItem to="/services" $isActive={location.pathname === '/services'}>Dienste</NavItem>
                <NavItem to="/projects" $isActive={location.pathname === '/projects'}>Projekte</NavItem>
                <NavItem to="/about" $isActive={location.pathname === '/about'}>Über uns</NavItem>
                <NavItem to="/contact" $isActive={location.pathname === '/contact'}>Kontakt</NavItem>
              </MobileNavItems>
              
              <ActionButton to="/help">Hilfe bekommen</ActionButton>
            </MobileMenu>
          )}
        </AnimatePresence>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
