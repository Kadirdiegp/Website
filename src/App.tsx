import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary-color: #4A90E2;
    --secondary-color: #FF6B6B;
    --background-color: #F8FAFC;
    --text-color: #1A1A1A;
    --text-light: #666666;
    --border-radius: 12px;
    --transition: all 0.3s ease;
  }

  body {
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.5;
    min-height: 100vh;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
  }
`;

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [chatKey, setChatKey] = useState(Date.now()); // Eindeutiger Schlüssel für den iFrame

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleChat = () => {
    if (!isChatOpen) {
      // Bei jedem Öffnen neuen Key generieren, um einen frischen iFrame zu erhalten
      setChatKey(Date.now());
      setIsChatOpen(true);
      
      if (isMobile) {
        window.scrollTo(0, 0);
        document.body.style.overflow = 'hidden';
      }
    } else {
      setIsChatOpen(false);
      if (isMobile) {
        document.body.style.overflow = 'auto';
      }
    }
  };

  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      
      {/* Chat Button */}
      <div 
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#8338ec',
          color: 'white',
          display: isChatOpen ? 'none' : 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          cursor: 'pointer',
          zIndex: 1000,
          fontSize: '24px'
        }} 
        onClick={toggleChat}
      >
        💬
      </div>

      {/* Chat Modal */}
      {isChatOpen && (
        <>
          {/* Hintergrund-Overlay für Mobile */}
          {isMobile && (
            <div 
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 999
              }}
              onClick={toggleChat}
            />
          )}
          
          <div style={{
            position: 'fixed',
            ...(isMobile 
              ? {
                  top: '0',
                  left: '0',
                  right: '0',
                  bottom: '0',
                  width: '100%',
                  height: '100%',
                  borderRadius: '0',
                }
              : {
                  bottom: '90px',
                  right: '20px',
                  width: '400px',
                  height: '600px',
                  borderRadius: '10px',
                }
            ),
            backgroundColor: 'white',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
            zIndex: 1000,
            overflow: 'hidden'
          }}>
            <iframe 
              key={chatKey}
              src="https://chtabot.netlify.app/" 
              title="Kinderschutzbund Chatbot"
              style={{
                width: '100%',
                height: '100%',
                border: 'none'
              }}
              allow="microphone; camera; geolocation"
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals allow-top-navigation"
            />
            
            {/* Close Button */}
            <div 
              style={{
                position: 'absolute',
                ...(isMobile
                  ? {
                      top: '15px',
                      right: '15px',
                      width: '50px',
                      height: '50px',
                    }
                  : {
                      bottom: '10px',
                      right: '10px',
                      width: '40px',
                      height: '40px',
                    }
                ),
                borderRadius: '50%',
                backgroundColor: '#f44336',
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                cursor: 'pointer',
                zIndex: 1010,
                fontSize: isMobile ? '24px' : '20px'
              }} 
              onClick={toggleChat}
            >
              ✕
            </div>
          </div>
        </>
      )}
    </Router>
  );
}

export default App;
