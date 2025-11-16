
import React from 'react';

const SimplicitySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
              Core Value #2
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-8">
              Simplicity Over Complexity
            </h2>
          </div>
          
          <div className="space-y-8 text-left">
            <div className="border-l-4 border-blue-600 pl-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                디지털 전환(DX)의 핵심은 복잡성을 해결하는 것이 아니라 단순화하는 것입니다. 
                우리는 복잡한 시스템과 프로세스를 사용자가 이해하기 쉬운 형태로 변환합니다.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">사용자 경험 중심 설계</h3>
                <p className="text-gray-700">
                  UI, UX, 프로세스, 데이터 구조의 모든 측면에서 단순함을 추구합니다. 
                  기술적 복잡성은 내부 로직으로 감추고, 사용자에게는 직관적인 경험을 제공합니다.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">본질에 집중</h3>
                <p className="text-gray-700">
                  불필요한 기능과 복잡한 옵션을 제거하고, 사용자가 정말 필요로 하는 핵심 기능에 집중합니다. 
                  간단한 것이 가장 강력한 솔루션입니다.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-lg text-gray-700 leading-relaxed italic">
                "복잡함을 단순하게 만드는 것이 진정한 혁신입니다. 
                우리의 모든 제품은 사용자가 5분 안에 이해하고 활용할 수 있도록 설계됩니다."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimplicitySection;
