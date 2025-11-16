const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            핵심 멤버
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            기술과 사람을 연결하는 전문가들이 모여 Artiordex의 비전을 실현합니다.<br />
            DX·AI·자동화 분야의 깊은 전문성과 고객 중심 철학으로 혁신을 이끌어갑니다.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-sm text-gray-600">전문 인력</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">프로젝트 경험</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5</div>
              <div className="text-sm text-gray-600">전문 부문</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">고객 만족도</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;