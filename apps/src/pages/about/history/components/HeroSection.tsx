
const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
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
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Abstract%20futuristic%20technology%20network%20with%20flowing%20data%20streams%2C%20connected%20nodes%20and%20bright%20blue%20light%20pathways%2C%20minimalist%20digital%20transformation%20visualization%20with%20clean%20geometric%20patterns%2C%20corporate%20innovation%20atmosphere%20with%20subtle%20grid%20overlay&width=1920&height=1080&seq=2&orientation=landscape')`
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <i className="ri-time-line mr-2"></i>
            Company Timeline
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            회사 <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">연혁</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 font-light">
            Artiordex History & Milestones
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            AI 기반 디지털 전환 전문 기업 Artiordex의 성장 여정과 
            혁신적인 기술 개발 과정을 시간순으로 소개합니다.
          </p>
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
