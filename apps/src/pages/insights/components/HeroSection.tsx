import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    'Microsoft Ecosystem Excellence',
    'AI-Driven Automation Solutions',
    'DevOps & Cloud Infrastructure',
    'Digital Transformation Leadership'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (!isDeleting) {
        setCurrentText(current.substring(0, currentText.length + 1));
        
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(current.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20technology%20workspace%20with%20holographic%20displays%20showing%20data%20analytics%2C%20AI%20neural%20networks%2C%20and%20cloud%20infrastructure%20diagrams%20in%20a%20sleek%20corporate%20environment%20with%20blue%20and%20orange%20accent%20lighting%2C%20professional%20atmosphere%2C%20high-tech%20visualization&width=1920&height=1080&seq=insights-hero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-6">
            Tech Insights & Innovation Hub
          </span>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Artiordex
            <span className="block text-3xl md:text-5xl text-orange-400 mt-2">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Bridging Microsoft Ecosystem with Open Source Innovation for 
            <span className="text-orange-400 font-semibold"> Execution-Focused Digital Transformation</span>
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-orange-400 mb-2">50+</div>
            <div className="text-white font-medium">Technology Stack</div>
            <div className="text-gray-300 text-sm">Microsoft & Open Source</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-orange-400 mb-2">350%</div>
            <div className="text-white font-medium">Growth Target</div>
            <div className="text-gray-300 text-sm">Annual Revenue Growth</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-orange-400 mb-2">12+</div>
            <div className="text-white font-medium">Partner Companies</div>
            <div className="text-gray-300 text-sm">Strategic Alliances</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Explore Tech Stack
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300">
            Download IR Deck
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;