import React, { useState } from 'react';
import styled from 'styled-components';

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

const ChatbotIcon = styled.div`
  font-size: 24px;
`;

const ChatbotWrapper = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  bottom: 90px;
  right: 20px;
  width: 400px; 
  height: 600px;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  display: ${props => props.$isOpen ? 'block' : 'none'};
  
  @media (max-width: 768px) {
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 85vh;
    max-height: 600px;
    border-radius: 10px 10px 0 0;
  }
`;

const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ChatbotButton onClick={toggleChatbot} aria-label="Chat öffnen" style={{ display: isOpen ? 'none' : 'flex' }}>
        <ChatbotIcon>
          💬
        </ChatbotIcon>
      </ChatbotButton>
      
      <ChatbotWrapper $isOpen={isOpen}>
        <iframe 
          src="https://kinderschutz-bot.windsurf.build/"
          title="Kinderschutz Chatbot"
          width="100%"
          height="100%"
          style={{ 
            border: 'none',
            width: '100%',
            height: '100%'
          }}
        />
        <button 
          onClick={toggleChatbot} 
          aria-label="Chat schließen"
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#f44336',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: 'none',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            cursor: 'pointer',
            zIndex: 1010
          }}
        >
          <span style={{ fontSize: '24px' }}>✕</span>
        </button>
      </ChatbotWrapper>
    </>
  );
};

export default ChatbotWidget;
