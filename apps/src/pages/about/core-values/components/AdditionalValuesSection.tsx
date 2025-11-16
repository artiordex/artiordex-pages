
import React from 'react';

const AdditionalValuesSection = () => {
  const values = [
    {
      number: "04",
      title: "Interoperability & Integration",
      description: "모든 기업 시스템이 원활하게 연결되는 생태계를 구축합니다. 데이터 구조 자동 매핑과 API 기반 통합을 통해 시스템 간 장벽을 제거하고 정보의 자유로운 흐름을 실현합니다."
    },
    {
      number: "05", 
      title: "Customer Success Before All",
      description: "고객의 성공이 우리의 최우선 목표입니다. 운영 효율성 증대, 비용 절감, 생산성 향상을 통해 고객이 실질적인 비즈니스 가치를 창출할 수 있도록 지원합니다."
    },
    {
      number: "06",
      title: "Sustainable Innovation", 
      description: "지속 가능한 기술 혁신을 추구합니다. 체계적인 문서화, 표준화된 개발 프로세스, 지속적인 AI 연구를 통해 장기적으로 발전할 수 있는 기술 기반을 구축합니다."
    },
    {
      number: "07",
      title: "Local-to-Global Impact",
      description: "지역 기반의 문제 해결에서 시작하여 글로벌 확장을 목표로 합니다. ConnectStack을 통한 지역 생태계 구축이 전 세계적인 디지털 전환의 모델이 되도록 노력합니다."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            추가 핵심 가치
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Artiordex의 기술 철학과 비즈니스 원칙을 구성하는 네 가지 추가 가치입니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 font-bold text-lg rounded-full">
                    {value.number}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalValuesSection;
