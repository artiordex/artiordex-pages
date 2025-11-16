
import { useState, useCallback, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatState {
  messages: Message[];
  isTyping: boolean;
  suggestions: string[];
}

export const useChat = () => {
  const [chatState, setChatState] = useState<ChatState>({
    messages: [
      {
        id: '1',
        text: 'Hello! I\'m your AI assistant for Artiordex. How can I help you today?',
        isUser: false,
        timestamp: new Date()
      }
    ],
    isTyping: false,
    suggestions: []
  });

  // Load chat history from localStorage
  useEffect(() => {
    const savedHistory = localStorage.getItem('artiordex-chat-history');
    if (savedHistory) {
      try {
        const parsed = JSON.parse(savedHistory);
        setChatState(prev => ({
          ...prev,
          messages: parsed.messages || prev.messages
        }));
      } catch (error) {
        console.error('Failed to load chat history:', error);
      }
    }
  }, []);

  // Save chat history to localStorage
  const saveChatHistory = useCallback((messages: Message[]) => {
    try {
      localStorage.setItem('artiordex-chat-history', JSON.stringify({
        messages: messages.slice(-50), // Keep only last 50 messages
        lastUpdated: new Date().toISOString()
      }));
    } catch (error) {
      console.error('Failed to save chat history:', error);
    }
  }, []);

  const addMessage = useCallback((message: Omit<Message, 'id' | 'timestamp'>) => {
    const newMessage: Message = {
      ...message,
      id: Date.now().toString(),
      timestamp: new Date()
    };

    setChatState(prev => {
      const updatedMessages = [...prev.messages, newMessage];
      saveChatHistory(updatedMessages);
      return {
        ...prev,
        messages: updatedMessages
      };
    });

    return newMessage;
  }, [saveChatHistory]);

  const setTyping = useCallback((isTyping: boolean) => {
    setChatState(prev => ({
      ...prev,
      isTyping
    }));
  }, []);

  const setSuggestions = useCallback((suggestions: string[]) => {
    setChatState(prev => ({
      ...prev,
      suggestions
    }));
  }, []);

  const clearChat = useCallback(() => {
    setChatState({
      messages: [
        {
          id: '1',
          text: 'Hello! I\'m your AI assistant for Artiordex. How can I help you today?',
          isUser: false,
          timestamp: new Date()
        }
      ],
      isTyping: false,
      suggestions: []
    });
    localStorage.removeItem('artiordex-chat-history');
  }, []);

  return {
    messages: chatState.messages,
    isTyping: chatState.isTyping,
    suggestions: chatState.suggestions,
    addMessage,
    setTyping,
    setSuggestions,
    clearChat
  };
};
