import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    'Technology Connects, Innovation Empowers',
    'Microsoft Ecosystem Digital Transformation',
    'Low-Code AI Integrated Solutions',
    'Custom AX/DX Solution Partner'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (!isDeleting) {
        if (currentText.length < current.length) {
          setCurrentText(current.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(current.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20digital%20transformation%20office%20environment%20with%20Microsoft%20Azure%20cloud%20technology%2C%20professional%20Korean%20CEO%20workspace%20with%20multiple%20monitors%20displaying%20data%20analytics%20dashboards%2C%20clean%20minimalist%20tech%20office%20with%20blue%20accent%20lighting%20and%20glass%20surfaces%2C%20corporate%20innovation%20center%20atmosphere&width=1920&height=1080&seq=1&orientation=landscape')`
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <i className="ri-microsoft-fill mr-2"></i>
            Microsoft Ecosystem Partner
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Artiordex</span>
          </h1>
          
          <div className="h-20 flex items-center justify-center">
            <p className="text-2xl md:text-3xl text-gray-700 font-light">
              {currentText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl text-gray-600 leading-relaxed">
            Artiordex Inc. is a Microsoft ecosystem-based digital transformation specialist, 
            combining <strong>Artificial + Order + Index</strong> to organize complex tasks through technology 
            and index data-driven innovation for sustainable business growth.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold whitespace-nowrap shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer">
            <i className="ri-rocket-line mr-2"></i>
            Start Digital Transformation
          </button>
          <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 font-semibold whitespace-nowrap cursor-pointer">
            <i className="ri-download-line mr-2"></i>
            Download Company Profile
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          {[
            { number: '350%', label: 'Annual Growth Target' },
            { number: '12+', label: 'Partner Companies' },
            { number: '75%', label: 'Automation Rate' },
            { number: '2026', label: 'Founded Year' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <i className="ri-arrow-down-line text-2xl text-gray-400"></i>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;