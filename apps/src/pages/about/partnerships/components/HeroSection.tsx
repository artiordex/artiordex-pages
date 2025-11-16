const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 lg:py-32">
      <div className="absolute inset-0 bg-[url('https://readdy.ai/api/search-image?query=Modern%20technology%20partnership%20network%20with%20interconnected%20nodes%2C%20clean%20minimalist%20design%2C%20Microsoft%20Azure%20blue%20color%20scheme%2C%20professional%20corporate%20background%2C%20digital%20transformation%20concept%2C%20geometric%20patterns%2C%20soft%20lighting&width=1920&height=1080&seq=partnership-hero&orientation=landscape')] bg-cover bg-center opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            파트너십
            <span className="block text-blue-600 mt-2">Partnership</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            기술로 연결하고, 혁신으로 성장하는 파트너십 생태계
          </p>
          
          <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
            Microsoft 생태계를 중심으로 한 전략적 파트너십을 통해<br />
            고객의 디지털 전환과 자동화 혁신을 실현합니다
          </p>
          
          {/* Partnership Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">Microsoft</div>
              <div className="text-sm text-gray-600">Partner Network</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-sm text-gray-600">기술 파트너</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">고객사 프로젝트</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">고객 만족도</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;