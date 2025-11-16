
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const typingTexts = [
    'Innovation Through Technology',
    'Digital Transformation Leaders',
    'Future-Ready Solutions',
    'Excellence in Every Project'
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      const targetText = typingTexts[currentText];
      if (displayText.length < targetText.length) {
        timeout = setTimeout(() => {
          setDisplayText(targetText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setCurrentText((prev) => (prev + 1) % typingTexts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentText, typingTexts]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-gradient-to">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-gradient-to/20 animate-pulse-slow"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-green/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-orange/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Particle Effect */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="block">Building the</span>
            <span className="bg-gradient-to-r from-primary-400 to-accent-green bg-clip-text text-transparent">
              Digital Future
            </span>
          </h1>
          
          <div className="h-16 mb-8 flex items-center justify-center">
            <p className="text-xl md:text-2xl text-gray-300 font-medium">
              {displayText}
              <span className="border-r-2 border-primary-500 animate-pulse ml-1"></span>
            </p>
          </div>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            We craft exceptional digital experiences through cutting-edge technology, innovative design, 
            and strategic thinking. Partner with us to transform your vision into reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/portfolio"
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap shadow-2xl hover:shadow-primary-500/25 transform hover:-translate-y-1 hover:scale-105"
            >
              View Our Work
            </Link>
            <Link 
              to="/contact"
              className="px-8 py-4 border-2 border-white/20 text-white hover:bg-white/10 rounded-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap backdrop-blur-sm hover:border-white/40 transform hover:-translate-y-1"
            >
              Start a Project
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse-slow"></div>
          </div>
          <p className="text-white/60 text-sm mt-2">Scroll to explore</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;