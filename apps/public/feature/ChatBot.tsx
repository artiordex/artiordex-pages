
import { useState, useEffect, useRef } from 'react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface Suggestion {
  text: string;
  intent: string;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your AI assistant. How can I help you with Artiordex services today?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [typingText, setTypingText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const intentSuggestions = {
    room_booking: [
      'Book a meeting room',
      'Check room availability',
      'Cancel my reservation',
      'Room booking policies',
      'Equipment in rooms'
    ],
    program: [
      'Available programs',
      'Program schedules',
      'Registration process',
      'Program requirements',
      'Certification details'
    ],
    equipment: [
      'Equipment catalog',
      'Booking devices',
      'Technical specifications',
      'Usage guidelines',
      'Maintenance schedule'
    ],
    general: [
      'Company information',
      'Contact details',
      'Service pricing',
      'Support hours',
      'Location directions'
    ]
  };

  const detectIntent = (text: string): string => {
    const lowerText = text.toLowerCase();
    if (lowerText.includes('room') || lowerText.includes('book') || lowerText.includes('reservation')) {
      return 'room_booking';
    }
    if (lowerText.includes('program') || lowerText.includes('course') || lowerText.includes('training')) {
      return 'program';
    }
    if (lowerText.includes('equipment') || lowerText.includes('device') || lowerText.includes('tool')) {
      return 'equipment';
    }
    return 'general';
  };

  const generateResponse = (userMessage: string): string => {
    const intent = detectIntent(userMessage);
    const responses = {
      room_booking: [
        'I can help you with room bookings. Our meeting rooms are equipped with the latest technology for seamless collaboration.',
        'For room reservations, please specify your preferred date, time, and capacity requirements.',
        'Our smart booking system ensures optimal room utilization and conflict-free scheduling.'
      ],
      program: [
        'We offer comprehensive AI and DevOps training programs designed by industry experts.',
        'Our certification programs cover Full-Stack Development, Cloud-Native Architecture, and AI Implementation.',
        'Each program includes hands-on projects and real-world case studies for practical learning.'
      ],
      equipment: [
        'Our equipment catalog includes cutting-edge development tools, AI workstations, and cloud infrastructure.',
        'All devices are regularly maintained and updated with the latest software and security patches.',
        'Equipment booking is available 24/7 through our automated system with instant confirmation.'
      ],
      general: [
        'Artiordex specializes in AI automation, DevOps solutions, and digital transformation services.',
        'Our team, led by CEO Min Si-woo, delivers scalable web services and intelligent automation solutions.',
        'We\'re located in Gwangmyeong, Korea, and provide 24/7 support for all our clients.'
      ]
    };
    
    return responses[intent as keyof typeof responses][Math.floor(Math.random() * responses[intent as keyof typeof responses].length)];
  };

  const typeMessage = (text: string, callback: () => void) => {
    setIsTyping(true);
    setTypingText('');
    
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index === 0) {
        setTimeout(() => {
          setTypingText(text.charAt(index));
          index++;
        }, 50);
      } else {
        setTypingText(text.substring(0, index + 1));
        index++;
        
        if (index >= text.length) {
          clearInterval(typeInterval);
          setTimeout(() => {
            setIsTyping(false);
            setTypingText('');
            callback();
          }, 100);
        }
      }
    }, 30);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const intent = detectIntent(inputValue);
    setSuggestions(intentSuggestions[intent as keyof typeof intentSuggestions].map(text => ({ text, intent })));
    
    const responseText = generateResponse(inputValue);
    setInputValue('');

    typeMessage(responseText, () => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
    });
  };

  const handleSuggestionClick = (suggestion: Suggestion) => {
    setInputValue(suggestion.text);
    setSuggestions([]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, typingText]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        setIsOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyboard);
    return () => window.removeEventListener('keydown', handleKeyboard);
  }, []);

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl transition-all duration-300 cursor-pointer z-50 flex items-center justify-center group hover:scale-110"
        >
          <div className="relative">
            <i className="ri-message-3-line text-xl group-hover:scale-110 transition-transform duration-300"></i>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
          </div>
        </button>
      )}

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 w-96 h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col overflow-hidden md:w-[448px] max-md:fixed max-md:inset-0 max-md:w-full max-md:h-full max-md:rounded-none max-md:bottom-0 max-md:right-0">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 flex items-center justify-between text-white">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <i className="ri-robot-line text-lg"></i>
              </div>
              <div>
                <h3 className="font-semibold">AI Assistant</h3>
                <p className="text-xs opacity-90">Online • Ready to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer"
            >
              <i className="ri-close-line text-lg"></i>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.isUser
                      ? 'bg-blue-600 text-white rounded-br-md'
                      : 'bg-white text-gray-800 rounded-bl-md shadow-sm border border-gray-100'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p className={`text-xs mt-1 ${message.isUser ? 'text-blue-100' : 'text-gray-500'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 p-3 rounded-2xl rounded-bl-md shadow-sm border border-gray-100 max-w-[80%]">
                  <p className="text-sm leading-relaxed">
                    {typingText}
                    <span className="border-r-2 border-blue-600 animate-pulse ml-1"></span>
                  </p>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          {suggestions.length > 0 && (
            <div className="p-4 border-t border-gray-200 bg-white">
              <p className="text-xs text-gray-600 mb-2">Suggested questions:</p>
              <div className="space-y-2">
                {suggestions.slice(0, 3).map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="w-full text-left p-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 cursor-pointer border border-blue-200 hover:border-blue-300"
                  >
                    {suggestion.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                disabled={isTyping}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer disabled:cursor-not-allowed"
              >
                <i className="ri-send-plane-line text-lg"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
