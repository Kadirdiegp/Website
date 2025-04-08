import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Anpassungen für Production und lokale Entwicklung
const isProd = window.location.hostname !== 'localhost';

const ChatbotButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #8338ec;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: 1000;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    background-color: #7030cc;
  }
`;

const CloseButton = styled(ChatbotButton)`
  background-color: #f44336;
  
  &:hover {
    background-color: #d32f2f;
  }
`;

const ChatbotIcon = styled.div`
  font-size: 24px;
`;

const ChatbotWrapper = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  bottom: 90px;
  right: 20px;
  width: 400px; 
  height: 600px;
  background: transparent;
  z-index: 1000;
  transition: all 0.3s ease;
  opacity: ${props => props.$isOpen ? '1' : '0'};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  pointer-events: ${props => props.$isOpen ? 'auto' : 'none'};
  
  @media (max-width: 768px) {
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 85vh;
    max-height: 600px;
  }
`;

const IframeContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Force reload the iframe when opened on production
    if (isOpen && isProd) {
      setLoading(true);
      setTimeout(() => setLoading(false), 300);
    }
  }, [isOpen]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  // ChatBot-URL je nach Umgebung anpassen
  const getChatbotUrl = () => {
    // Wir verwenden die HTTPS-Variante um Mixed-Content-Probleme zu vermeiden
    // Cache-Busting Parameter hinzufügen
    return `https://kinderschutz-bot.windsurf.build/?embedded=true&transparent=true&noFrame=true&t=${Date.now()}`;
  };

  return (
    <>
      {!isOpen ? (
        <ChatbotButton onClick={toggleChatbot} aria-label="Chat öffnen">
          <ChatbotIcon>
            💬
          </ChatbotIcon>
        </ChatbotButton>
      ) : (
        <CloseButton onClick={toggleChatbot} aria-label="Chat schließen">
          <ChatbotIcon>
            ✕
          </ChatbotIcon>
        </CloseButton>
      )}
      
      <ChatbotWrapper $isOpen={isOpen}>
        {isOpen && !loading && (
          <IframeContainer>
            <iframe 
              src={getChatbotUrl()}
              title="Kinderschutz Chatbot"
              width="100%"
              height="100%"
              frameBorder="0"
              referrerPolicy="origin"
              allow="microphone"
              style={{ 
                border: 'none',
                width: '100%',
                height: '100%',
                display: 'block',
                backgroundColor: 'transparent'
              }}
            />
          </IframeContainer>
        )}
      </ChatbotWrapper>
    </>
  );
};

export default ChatbotWidget;
