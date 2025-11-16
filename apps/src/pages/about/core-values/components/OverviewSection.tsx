
import React from 'react';

const OverviewSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              기술보다 사람을 먼저 생각합니다
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Artiordex는 기술이 사람을 위해 존재한다고 믿습니다. 우리의 모든 솔루션은 복잡한 업무를 단순화하고, 
              반복적인 작업을 자동화하여 사람들이 더 가치 있는 일에 집중할 수 있도록 돕습니다.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              AI와 자동화 기술을 통해 기업과 조직이 더 효율적으로 운영되고, 지역 사회가 기술의 혜택을 누릴 수 있는 
              지속 가능한 디지털 생태계를 구축하는 것이 우리의 사명입니다.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Artiflow, SmartHub, ConnectStack 세 가지 핵심 제품을 통해 데이터 통합, 워크플로우 자동화, 
              시스템 연결의 새로운 표준을 제시하며, 인간 중심의 기술 혁신을 실현해 나가고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
