const VisionSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Vision Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              회사 비전 & 미래 전략
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Artiordex는 AI와 데이터 기반의 의사결정 시스템을 통해 기업의 디지털 혁신을 선도하는 글로벌 기술 기업으로 성장하고자 합니다.
              </p>
              
              <p className="text-base text-gray-600 leading-relaxed">
                Microsoft Power Platform을 기반으로 한 엔터프라이즈 자동화 솔루션은 고객사의 업무 효율성을 극대화하고, 
                새로운 비즈니스 기회를 창출하는 핵심 동력이 될 것입니다. 
                저희는 단순한 기술 제공을 넘어 고객의 비즈니스 성장을 위한 전략적 파트너로서의 역할을 수행하겠습니다.
              </p>
              
              <p className="text-base text-gray-600 leading-relaxed">
                ConnectWon과 같은 혁신적인 플랫폼 전략을 통해 기업 간 연결성을 강화하고, 
                지역사회와 기업, 사용자가 함께 성장할 수 있는 건강한 생태계를 구축해 나가겠습니다.
              </p>
              
              <p className="text-base text-gray-600 leading-relaxed">
                앞으로 Artiordex는 지속 가능한 기술 혁신을 통해 사회적 가치를 창출하며, 
                글로벌 시장에서 인정받는 대한민국의 대표적인 기술 기업으로 도약하겠습니다.
              </p>
            </div>
          </div>
          
          {/* Vision Graphic */}
          <div className="relative">
            <div 
              className="w-full h-80 md:h-96 bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=abstract%20futuristic%20technology%20visualization%20with%20AI%20neural%20networks%20data%20flows%20cloud%20computing%20digital%20transformation%20modern%20corporate%20design%20blue%20and%20white%20colors%20minimal%20clean%20background&width=600&height=400&seq=vision-graphic&orientation=landscape')`
              }}
            >
              <div className="absolute inset-0 bg-blue-600/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;