import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    'Technology Connects, Innovation Empowers',
    'AX/DX Integrated Solutions',
    'Microsoft + Open Source Fusion',
    'Execution-Focused Digital Transformation'
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50"></div>
      
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
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20digital%20transformation%20workspace%20with%20interconnected%20gears%20and%20technology%20integration%2C%20Microsoft%20Azure%20cloud%20platforms%20connected%20with%20open%20source%20tools%2C%20professional%20Korean%20tech%20office%20environment%20with%20blue%20and%20orange%20accent%20lighting%2C%20ERP%20AI%20RPA%20Web%20App%20consulting%20visualization%20with%20dynamic%20gear%20mechanisms&width=1920&height=1080&seq=1&orientation=landscape')`
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex justify-center items-center space-x-2 text-sm text-gray-600">
            <a href="/" className="hover:text-blue-600 transition-colors cursor-pointer">Home</a>
            <i className="ri-arrow-right-s-line"></i>
            <span className="text-blue-600 font-medium">Services</span>
          </nav>
        </div>

        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-orange-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <i className="ri-settings-3-line mr-2"></i>
            AX/DX Integration Solutions
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Technology Connects,<br />
            <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">Innovation Empowers</span>
          </h1>
          
          <div className="h-20 flex items-center justify-center">
            <p className="text-xl md:text-2xl text-gray-700 font-light">
              {currentText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl text-gray-600 leading-relaxed">
            Maximize your organization's <strong>execution capabilities</strong> through customized digital transformation 
            by fusing Microsoft Power Platform with open-source ecosystems for <strong>practical implementation</strong>.
          </p>
        </div>

        {/* Animated Gears Visualization */}
        <div className="flex justify-center items-center mb-12">
          <div className="relative">
            {/* Central Gear */}
            <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-orange-600 rounded-full flex items-center justify-center animate-spin-slow">
              <i className="ri-settings-3-fill text-3xl text-white"></i>
            </div>
            
            {/* Surrounding Service Gears */}
            {[
              { icon: 'ri-robot-line', label: 'AI/RPA', position: 'top-0 left-1/2 transform -translate-x-1/2 -translate-y-16', delay: '0s' },
              { icon: 'ri-code-line', label: 'Web/App', position: 'top-1/2 right-0 transform translate-x-16 -translate-y-1/2', delay: '0.5s' },
              { icon: 'ri-lightbulb-line', label: 'Consulting', position: 'bottom-0 left-1/2 transform -translate-x-1/2 translate-y-16', delay: '1s' },
              { icon: 'ri-database-line', label: 'ERP', position: 'top-1/2 left-0 transform -translate-x-16 -translate-y-1/2', delay: '1.5s' },
            ].map((gear, index) => (
              <div 
                key={index}
                className={`absolute ${gear.position} w-16 h-16 bg-white border-4 border-blue-200 rounded-full flex items-center justify-center shadow-lg animate-spin-reverse`}
                style={{ animationDelay: gear.delay }}
              >
                <i className={`${gear.icon} text-xl text-blue-600`}></i>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-orange-600 text-white rounded-lg hover:from-blue-700 hover:to-orange-700 transition-all duration-300 font-semibold whitespace-nowrap shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer">
            <i className="ri-chat-3-line mr-2"></i>
            Request Custom Solution (PoC/MVP Consultation)
          </button>
          <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 font-semibold whitespace-nowrap cursor-pointer">
            <i className="ri-download-line mr-2"></i>
            Download Service Portfolio
          </button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          {[
            { number: '75%', label: 'Automation Rate' },
            { number: '350%', label: 'Growth Target' },
            { number: '12+', label: 'Partner Companies' },
            { number: '100%', label: 'Execution Focus' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent mb-2">{stat.number}</div>
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