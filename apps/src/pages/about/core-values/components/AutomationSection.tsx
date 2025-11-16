
import React from 'react';

const AutomationSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src="https://readdy.ai/api/search-image?query=Automation%20workflow%20visualization%20with%20connected%20nodes%2C%20data%20flow%20diagrams%2C%20AI%20processing%20systems%2C%20clean%20minimalist%20design%2C%20blue%20and%20white%20color%20scheme%2C%20modern%20business%20automation%20concept%2C%20digital%20transformation%20illustration&width=600&height=500&seq=automation-first&orientation=landscape"
              alt="Automation-First DX"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                Core Value #3
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Automation-First DX
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                자동화는 모든 디지털 전환의 출발점입니다. 반복적이고 시간 소모적인 업무를 제거하여 
                사람들이 창의적이고 전략적인 가치 있는 업무에 집중할 수 있도록 합니다.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">AI Workflow Generator</h4>
                    <p className="text-gray-700">
                      복잡한 비즈니스 프로세스를 자동화된 워크플로우로 변환하여 
                      효율성을 극대화합니다.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">스마트 데이터 매핑</h4>
                    <p className="text-gray-700">
                      서로 다른 시스템 간의 데이터 구조를 자동으로 분석하고 
                      최적의 연결 방식을 제안합니다.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">리소스 최적화</h4>
                    <p className="text-gray-700">
                      기업이 더 적은 리소스로 더 큰 성과를 낼 수 있는 
                      자동화 기반 운영 구조를 구축합니다.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-blue-900 font-medium">
                  Artiflow, SmartHub, ConnectStack의 모든 기능은 자동화를 기반으로 설계되어 
                  사용자의 수동 작업을 최소화하고 지능적인 의사결정을 지원합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;
