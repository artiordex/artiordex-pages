import { useState, useEffect, useRef } from 'react';

const DivisionDetailsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const divisions = [
    {
      title: "전략기획부문",
      subtitle: "Strategy & Planning Division",
      icon: "ri-strategic-line",
      color: "from-blue-500 to-blue-600",
      description: "비즈니스 전략 수립부터 프로젝트 기획까지, 아티올덱스의 모든 혁신이 시작되는 곳입니다.",
      responsibilities: [
        "사업 전략 및 서비스 기획",
        "시장 및 경쟁사 분석",
        "BMC 작성 및 RFD 분석",
        "고객 요구사항 연구",
        "아키텍처 기획",
        "IR 자료 및 프로젝트 기획",
        "리스크 평가 및 프로세스 설계"
      ],
      workflow: "기획 → 분석 → 설계 → 검증 단계를 주도하며, KPI, 워크플로우, 로드맵, 컨설팅 보고서를 생산합니다."
    },
    {
      title: "솔루션영업부문",
      subtitle: "Solution Business Division",
      icon: "ri-handshake-line",
      color: "from-indigo-500 to-indigo-600",
      description: "고객과의 첫 만남부터 지속적인 성공까지, 신뢰할 수 있는 파트너십을 구축합니다.",
      responsibilities: [
        "B2B 영업 및 공공부문 협력",
        "Microsoft Cloud 솔루션 영업",
        "고객 온보딩 및 요구사항 번역",
        "입찰 지원 및 PoC 제안",
        "파트너십 네트워킹",
        "고객 성공 관리",
        "구독 확장 및 인바운드/아웃바운드 영업"
      ],
      workflow: "마케팅, 전략기획, 개발팀과 긴밀히 협력하여 지속적인 고객 관계를 보장합니다."
    },
    {
      title: "마케팅부문",
      subtitle: "Marketing Division",
      icon: "ri-megaphone-line",
      color: "from-purple-500 to-purple-600",
      description: "아티올덱스의 비전을 고객 스토리로 연결하고, 스타트업부터 대기업까지 인지도를 확산합니다.",
      responsibilities: [
        "브랜딩 및 콘텐츠 마케팅",
        "DX 스토리텔링 및 기술 문서 작성",
        "블로그/Notion 운영",
        "프로모션 자산 및 랜딩 페이지",
        "IR 덱 및 피치 덱",
        "AI/자동화 교육 자료",
        "광고 전략, SEO, SNS 운영"
      ],
      workflow: "전략기획팀 및 영업팀과 교차 기능적으로 협력하여 커뮤니케이션 프레임워크를 구축합니다."
    },
    {
      title: "AX/DX 개발부문",
      subtitle: "AX/DX Development Division",
      icon: "ri-code-s-slash-line",
      color: "from-cyan-500 to-cyan-600",
      description: "분석부터 구현까지 전체 프로세스를 실행하며, MVP, PoC, 자동화 워크플로우를 구축합니다.",
      responsibilities: [
        "풀스택 개발 및 Power Platform 솔루션 엔지니어링",
        "API 개발 및 Microsoft 365 통합",
        "DevOps 파이프라인 및 RPA 자동화",
        "AI 에이전트 통합 및 데이터 엔지니어링",
        "대시보드/Power BI 개발",
        "Azure 아키텍처 및 클라우드 보안",
        "CI/CD, 관찰 가능성, QA 테스트, 시스템 모니터링"
      ],
      workflow: "분석 → 설계 → 구현 → 검증의 전체 프로세스를 실행하며 프로덕션 릴리스 시스템을 유지합니다."
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            부문별 <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">전문성</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            각 부문의 핵심 역할과 책임, 그리고 협업 방식을 자세히 살펴보세요
          </p>
        </div>

        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 bg-white rounded-2xl p-2 shadow-sm border border-gray-100">
            {divisions.map((division, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <i className={`${division.icon} mr-2`}></i>
                {division.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left Column - Overview */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${divisions[activeTab].color} rounded-2xl flex items-center justify-center mr-4`}>
                      <i className={`${divisions[activeTab].icon} text-2xl text-white`}></i>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">{divisions[activeTab].title}</h3>
                      <p className="text-lg text-gray-600">{divisions[activeTab].subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {divisions[activeTab].description}
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">워크플로우</h4>
                    <p className="text-gray-700 leading-relaxed">
                      {divisions[activeTab].workflow}
                    </p>
                  </div>
                </div>

                {/* Right Column - Responsibilities */}
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">핵심 책임 영역</h4>
                  <div className="space-y-4">
                    {divisions[activeTab].responsibilities.map((responsibility, index) => (
                      <div 
                        key={index}
                        className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300"
                      >
                        <div className={`w-8 h-8 bg-gradient-to-r ${divisions[activeTab].color} rounded-lg flex items-center justify-center flex-shrink-0 mt-1`}>
                          <i className="ri-check-line text-white text-sm"></i>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{responsibility}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DivisionDetailsSection;