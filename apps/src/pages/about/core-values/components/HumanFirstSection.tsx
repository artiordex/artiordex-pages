
import React from 'react';

const HumanFirstSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                Core Value #1
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Human-First Technology
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                기술은 사람을 돕기 위해 존재합니다. 우리는 AI가 인간의 의사결정을 대체하는 것이 아니라, 
                더 나은 판단을 할 수 있도록 지원하는 파트너라고 생각합니다.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                모든 제품과 서비스는 접근성, 직관성, 사용성을 최우선으로 설계됩니다. 
                복잡한 기술적 구현은 내부에 감추고, 사용자에게는 간단하고 명확한 인터페이스를 제공합니다.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                기업, 조직, 지역 생태계에서 기술이 가져다주는 실질적 가치는 사람들의 역할을 확장하고, 
                창의적이고 전략적인 업무에 더 많은 시간을 투자할 수 있게 하는 것입니다.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://readdy.ai/api/search-image?query=Human-centered%20technology%20concept%20with%20people%20collaborating%20with%20AI%20systems%2C%20warm%20lighting%2C%20professional%20business%20environment%2C%20diverse%20team%20working%20together%20with%20digital%20interfaces%2C%20modern%20office%20setting%2C%20human%20connection%20and%20technology%20harmony&width=600&height=500&seq=human-first-tech&orientation=landscape"
              alt="Human-First Technology"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanFirstSection;
