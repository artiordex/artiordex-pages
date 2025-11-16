const PhilosophySection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            경영 철학 & 핵심 가치
          </h2>
          <p className="text-lg text-gray-600">
            Artiordex가 추구하는 기술 철학과 핵심 가치
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Core Value 1 */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              기술은 사람을 향해야 한다
            </h3>
            <p className="text-gray-600 leading-relaxed">
              모든 기술 솔루션은 사용자의 편의성과 효율성을 최우선으로 고려하여 설계되어야 합니다. 
              복잡한 기술을 단순하고 직관적으로 만드는 것이 우리의 역할입니다.
            </p>
          </div>
          
          {/* Core Value 2 */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              DX는 복잡함을 단순하게 만드는 과정
            </h3>
            <p className="text-gray-600 leading-relaxed">
              디지털 전환의 핵심은 복잡한 업무 프로세스를 간소화하고 자동화하여 
              조직의 생산성을 극대화하는 것입니다.
            </p>
          </div>
          
          {/* Core Value 3 */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              AI는 비즈니스를 확장시키는 에너지
            </h3>
            <p className="text-gray-600 leading-relaxed">
              인공지능은 단순한 자동화 도구가 아닌, 새로운 비즈니스 기회를 창출하고 
              혁신적인 가치를 만들어내는 핵심 동력입니다.
            </p>
          </div>
          
          {/* Core Value 4 */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              고객 성공이 최고의 가치
            </h3>
            <p className="text-gray-600 leading-relaxed">
              고객의 성공이 곧 Artiordex의 성공입니다. 
              고객사의 비즈니스 목표 달성을 위해 최선의 솔루션과 서비스를 제공합니다.
            </p>
          </div>
          
          {/* Core Value 5 */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              끊임없는 학습과 혁신
            </h3>
            <p className="text-gray-600 leading-relaxed">
              빠르게 변화하는 기술 환경에 적응하기 위해 지속적인 학습과 혁신을 통해 
              최신 기술 트렌드를 선도합니다.
            </p>
          </div>
          
          {/* Core Value 6 */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              지속 가능한 파트너십
            </h3>
            <p className="text-gray-600 leading-relaxed">
              단기적인 프로젝트를 넘어 장기적인 파트너십을 통해 
              고객과 함께 성장하는 동반자 관계를 구축합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;