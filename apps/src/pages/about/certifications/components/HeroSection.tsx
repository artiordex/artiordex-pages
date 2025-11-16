const HeroSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-white to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 border border-blue-200 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 border border-blue-200 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 border border-blue-100 rounded-full"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          인증 & 브로슈어
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
          Certifications, Partnerships & Official Documents
        </p>
      </div>
    </section>
  );
};

export default HeroSection;