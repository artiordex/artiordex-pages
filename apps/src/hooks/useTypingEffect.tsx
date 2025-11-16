
import { useState, useEffect, useCallback } from 'react';

interface TypingEffectOptions {
  speed?: number;
  initialDelay?: number;
  onComplete?: () => void;
}

export const useTypingEffect = (
  text: string,
  options: TypingEffectOptions = {}
) => {
  const { speed = 30, initialDelay = 50, onComplete } = options;
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const startTyping = useCallback(() => {
    setIsTyping(true);
    setDisplayText('');
    setCurrentIndex(0);
  }, []);

  const stopTyping = useCallback(() => {
    setIsTyping(false);
    setDisplayText(text);
    setCurrentIndex(text.length);
  }, [text]);

  useEffect(() => {
    if (!isTyping || currentIndex >= text.length) {
      if (isTyping && currentIndex >= text.length) {
        setIsTyping(false);
        onComplete?.();
      }
      return;
    }

    const timeout = setTimeout(() => {
      if (currentIndex === 0) {
        // Initial delay for first character
        setTimeout(() => {
          setDisplayText(text.charAt(0));
          setCurrentIndex(1);
        }, initialDelay);
      } else {
        setDisplayText(text.substring(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, currentIndex, isTyping, speed, initialDelay, onComplete]);

  return {
    displayText,
    isTyping,
    startTyping,
    stopTyping,
    progress: text.length > 0 ? currentIndex / text.length : 0
  };
};
