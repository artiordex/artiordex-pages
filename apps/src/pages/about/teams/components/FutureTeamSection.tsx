const FutureTeamSection = () => {
  const futureRoles = [
    {
      name: "AI 엔지니어링 리드",
      position: "AI Engineering Lead",
      department: "R&D Division",
      summary: "머신러닝과 AI 모델 개발을 통해 차세대 자동화 솔루션을 구축합니다.",
      keyFocus: ["AI 모델 개발", "MLOps 구축", "AI Agent 시스템", "예측 분석"],
      timeline: "2025 Q2",
      status: "planned"
    },
    {
      name: "Artiflow 제품 매니저",
      position: "Artiflow Product Manager",
      department: "SaaS Product Division",
      summary: "AI Workflow OS의 제품 전략과 로드맵을 수립하고 사용자 경험을 최적화합니다.",
      keyFocus: ["제품 전략", "사용자 경험", "기능 기획", "시장 분석"],
      timeline: "2025 Q1",
      status: "recruiting"
    },
    {
      name: "SmartHub 제품 매니저",
      position: "SmartHub Product Manager", 
      department: "SaaS Product Division",
      summary: "데이터 통합 플랫폼의 제품 개발과 고객 성공을 이끌어갑니다.",
      keyFocus: ["데이터 통합", "API 설계", "고객 성공", "제품 최적화"],
      timeline: "2025 Q3",
      status: "planned"
    },
    {
      name: "고객 성공 매니저",
      position: "Customer Success Manager",
      department: "Customer Success Division",
      summary: "고객의 장기적인 성공을 보장하고 지속적인 가치 창출을 지원합니다.",
      keyFocus: ["고객 온보딩", "성공 지표 관리", "확장 전략", "관계 관리"],
      timeline: "2024 Q4",
      status: "recruiting"
    },
    {
      name: "데이터 엔지니어링 리드",
      position: "Data Engineering Lead",
      department: "Data & Analytics Division",
      summary: "대규모 데이터 파이프라인과 분석 인프라를 구축하고 운영합니다.",
      keyFocus: ["데이터 파이프라인", "클라우드 인프라", "실시간 분석", "데이터 거버넌스"],
      timeline: "2025 Q4",
      status: "planned"
    },
    {
      name: "운영 보안 리드",
      position: "DevSecOps Lead",
      department: "Operations Division",
      summary: "보안이 내재된 운영 프로세스와 인프라를 설계하고 관리합니다.",
      keyFocus: ["보안 자동화", "컴플라이언스", "인프라 보안", "모니터링"],
      timeline: "2026 Q1",
      status: "planned"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'recruiting': return 'bg-green-100 text-green-700';
      case 'planned': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'recruiting': return '채용 중';
      case 'planned': return '계획됨';
      default: return '검토 중';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">미래 조직 비전</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            아티올덱스의 3년 성장 계획에 따른 확장 조직 구조입니다.
          </p>
          <div className="inline-flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-600">채용 중</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-gray-600">계획됨</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {futureRoles.map((role, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(role.status)}`}>
                  {getStatusText(role.status)}
                </span>
              </div>

              {/* Role Header */}
              <div className="mb-4 pr-20">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{role.name}</h3>
                <p className="text-sm text-blue-600 font-medium mb-1">{role.position}</p>
                <p className="text-xs text-gray-500">{role.department}</p>
              </div>

              {/* Summary */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{role.summary}</p>

              {/* Key Focus Areas */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">핵심 영역</h4>
                <div className="grid grid-cols-2 gap-2">
                  {role.keyFocus.map((focus, focusIndex) => (
                    <div key={focusIndex} className="flex items-center text-xs text-gray-600">
                      <span className="w-1 h-1 bg-blue-500 rounded-full mr-2"></span>
                      {focus}
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-xs text-gray-500">예상 시기</span>
                <span className="text-sm font-medium text-gray-900">{role.timeline}</span>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-50"></div>
            </div>
          ))}
        </div>

        {/* Growth Vision */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">2027년 비전</h3>
          <p className="text-lg mb-6 opacity-90">
            50명 규모의 전문 조직으로 성장하여 아시아 태평양 지역 DX 리더로 자리매김
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold mb-1">50+</div>
              <div className="text-sm opacity-80">전문 인력</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">5</div>
              <div className="text-sm opacity-80">사업 부문</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">3</div>
              <div className="text-sm opacity-80">SaaS 제품</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">10+</div>
              <div className="text-sm opacity-80">글로벌 파트너</div>
            </div>
          </div>
        </div>

        {/* Join Us CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">함께 성장할 인재를 찾습니다</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            아티올덱스와 함께 DX·AI 분야의 혁신을 이끌어갈 전문가를 모시고 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium">
              채용 정보 보기
            </button>
            <button className="px-8 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium">
              이력서 제출
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureTeamSection;