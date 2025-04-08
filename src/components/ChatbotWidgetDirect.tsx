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
`;

const ChatbotModal = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  bottom: 90px;
  right: 20px;
  width: 400px;
  height: 600px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  display: ${(props) => (props.$isOpen ? 'block' : 'none')};
  
  @media (max-width: 768px) {
    width: 100%;
    right: 0;
    bottom: 0;
    height: 80vh;
    border-radius: 15px 15px 0 0;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f44336;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: 10;
`;

const ChatbotWidgetDirect: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      {!isOpen && (
        <ChatbotButton onClick={toggleChat}>
          <span role="img" aria-label="chat">💬</span>
        </ChatbotButton>
      )}
      
      <ChatbotModal $isOpen={isOpen}>
        <iframe
          src="https://kinderschutz-bot.windsurf.build/"
          title="Kinderschutzbund Chatbot"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 'none' }}
        />
        
        <CloseButton onClick={toggleChat}>
          <span>✕</span>
        </CloseButton>
      </ChatbotModal>
    </>
  );
};

export default ChatbotWidgetDirect;
