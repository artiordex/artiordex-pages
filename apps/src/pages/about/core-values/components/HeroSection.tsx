
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Modern%20abstract%20technology%20background%20with%20flowing%20light%20streams%2C%20data%20connections%2C%20and%20network%20grids%20in%20azure%20blue%20and%20white%20colors%2C%20minimalist%20corporate%20design%2C%20clean%20geometric%20patterns%2C%20futuristic%20digital%20transformation%20concept&width=1920&height=800&seq=core-values-hero&orientation=landscape"
          alt="Core Values Background"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-white/80"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            핵심 가치
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 font-light">
            Artiordex Core Values & Principles
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
