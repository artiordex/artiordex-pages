const VisionHeroSection = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-8 border border-white/20">
            <i className="ri-lightbulb-line mr-2"></i>
            Our Vision & Mission
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            비전 & 미션
          </h1>
          
          <p className="text-2xl md:text-3xl text-blue-100 font-light leading-relaxed max-w-4xl mx-auto">
            기술의 민주화를 통해 모든 조직과 개인이<br />
            혁신의 주체가 되는 세상을 만듭니다
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16">
          <div className="animate-bounce">
            <i className="ri-arrow-down-line text-3xl text-white/60"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionHeroSection;
