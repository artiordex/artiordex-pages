const HeroSection = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=futuristic%20technology%20abstract%20background%20with%20blue%20flowing%20lines%20data%20streams%20cloud%20patterns%20minimal%20corporate%20design%20clean%20white%20and%20azure%20blue%20colors%20modern%20digital%20transformation%20visualization&width=1920&height=1080&seq=ceo-hero-bg&orientation=landscape')`
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/20"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            CEO 인사말
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 font-light">
            Message from the CEO
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;