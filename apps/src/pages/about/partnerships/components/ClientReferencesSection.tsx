const ClientReferencesSection = () => {
  const clientCases = [
    {
      category: "스타트업 & 중소기업",
      icon: "ri-rocket-line",
      cases: [
        {
          title: "초기 스타트업 MVP 구축",
          description: "제한된 리소스로 빠른 시장 검증이 필요한 스타트업을 위한 Power Platform 기반 MVP 제작",
          results: ["개발 기간 70% 단축", "초기 투자비용 60% 절감", "빠른 시장 피드백 수집"]
        },
        {
          title: "중소기업 프로세스 자동화",
          description: "수작업 중심의 업무 프로세스를 Power Automate와 RPA를 활용한 자동화 시스템으로 전환",
          results: ["업무 효율성 80% 향상", "인적 오류 95% 감소", "월 운영비용 40% 절감"]
        }
      ]
    },
    {
      category: "공공기관 & 교육",
      icon: "ri-government-line",
      cases: [
        {
          title: "공공기관 데이터 기반 행정 DX",
          description: "분산된 행정 데이터를 통합하고 Power BI를 활용한 데이터 기반 의사결정 체계 구축",
          results: ["데이터 처리 시간 85% 단축", "보고서 작성 자동화", "정책 결정 속도 향상"]
        },
        {
          title: "교육기관 디지털 전환",
          description: "Microsoft 365와 Teams를 기반으로 한 통합 교육 플랫폼 및 학사 관리 시스템 구축",
          results: ["원격 교육 품질 향상", "학사 업무 효율성 증대", "학생 만족도 개선"]
        }
      ]
    },
    {
      category: "창업센터 & 액셀러레이터",
      icon: "ri-building-line",
      cases: [
        {
          title: "창업센터 AI 기반 운영 자동화",
          description: "입주 기업 관리, 멘토링 매칭, 프로그램 운영을 AI Agent와 자동화 워크플로우로 최적화",
          results: ["운영 효율성 90% 향상", "멘토링 매칭 정확도 증대", "프로그램 만족도 상승"]
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            고객사 & 레퍼런스
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            다양한 산업과 규모의 고객사와 함께 실행한 DX·AX 프로젝트를 통해 
            검증된 실행력과 전문성을 제공합니다
          </p>
        </div>

        <div className="space-y-12">
          {clientCases.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <i className={`${category.icon} text-xl text-white`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {category.cases.map((clientCase, caseIndex) => (
                  <div key={caseIndex} className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                      {clientCase.title}
                    </h4>
                    <p className="text-gray-600 mb-6">
                      {clientCase.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h5 className="font-semibold text-gray-900 text-sm">주요 성과</h5>
                      {clientCase.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          <span className="text-sm text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">실행 중심 DX 파트너십</h3>
              <p className="text-gray-300 mb-8">
                Artiordex는 단순한 기술 공급자가 아닌, 고객의 비즈니스 성장을 함께 설계하고 
                실행하는 DX 파트너입니다. 각 프로젝트는 고객의 특수한 요구사항과 
                비즈니스 목표에 맞춘 맞춤형 솔루션으로 진행됩니다.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                  <div className="text-sm text-gray-400">완료 프로젝트</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">98%</div>
                  <div className="text-sm text-gray-400">고객 만족도</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                  <div className="text-sm text-gray-400">산업 분야</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                  <div className="text-sm text-gray-400">기술 지원</div>
                </div>
              </div>
            </div>

            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Business%20partnership%20success%20meeting%2C%20diverse%20team%20collaboration%2C%20digital%20transformation%20results%2C%20modern%20corporate%20office%2C%20professional%20handshake%2C%20growth%20charts%20and%20analytics%2C%20clean%20minimalist%20design&width=600&height=400&seq=client-success&orientation=landscape"
                alt="고객 성공 사례"
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              고객 가치 중심 접근법
            </h3>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
              모든 프로젝트는 고객의 비즈니스 목표 달성을 최우선으로 하며, 
              기술적 완성도와 실용성을 동시에 추구합니다
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-search-line text-2xl text-white"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">문제 정의</h4>
                <p className="text-sm text-gray-600">고객의 핵심 과제와 요구사항을 정확히 파악</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-settings-3-line text-2xl text-white"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">솔루션 설계</h4>
                <p className="text-sm text-gray-600">Microsoft 생태계 기반 최적화된 아키텍처 구성</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-rocket-line text-2xl text-white"></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">가치 실현</h4>
                <p className="text-sm text-gray-600">측정 가능한 비즈니스 성과와 ROI 달성</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReferencesSection;