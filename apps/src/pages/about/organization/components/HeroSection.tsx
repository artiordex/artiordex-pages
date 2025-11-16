const HeroSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 border border-blue-200 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 border border-indigo-200 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-blue-100 rounded-full"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          조직 <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">구조</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Organization Structure & Team Excellence
        </p>
        <p className="text-lg text-gray-500 max-w-3xl mx-auto mt-4">
          혁신적인 DX·AX 솔루션을 제공하는 아티올덱스의 전문 조직 체계와 협업 구조를 소개합니다
        </p>
      </div>
    </section>
  );
};

export default HeroSection;