const HeroSection = () => {
  return (
    <section className="relative py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://readdy.ai/api/search-image?query=Abstract%20modern%20technology%20network%20connections%2C%20digital%20transformation%20concept%2C%20blue%20gradient%20background%2C%20minimalist%20geometric%20patterns%2C%20futuristic%20corporate%20style%2C%20clean%20and%20professional%20atmosphere%2C%20soft%20lighting%2C%20high-tech%20business%20environment&width=1920&height=800&seq=careers-hero-bg&orientation=landscape')] bg-cover bg-center opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <span className="text-white text-sm font-medium">Join Our Team</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            기술로 사람과 세상을 연결합니다
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-6 max-w-4xl mx-auto leading-relaxed">
            Artiordex는 DX·AX·AI를 기반으로 미래를 설계하는 기업입니다.<br />
            혁신적인 기술과 고객 중심의 가치로 디지털 전환을 이끌어갈 인재를 찾습니다.
          </p>
          
          <p className="text-lg text-blue-200 mb-12 max-w-3xl mx-auto">
            우리는 Microsoft 생태계 기반의 자동화·데이터 통합·AI 솔루션을 통해<br />
            기업과 조직의 성장을 지원하는 전문 기술 파트너입니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#job-openings" 
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 whitespace-nowrap"
            >
              채용 공고 보기
            </a>
            <a 
              href="#culture" 
              className="px-8 py-4 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200 whitespace-nowrap border-2 border-white"
            >
              조직문화 알아보기
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-blue-200">전문 인력</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">5</div>
              <div className="text-blue-200">핵심 부문</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-200">성공 프로젝트</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-blue-200">고객 만족도</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;