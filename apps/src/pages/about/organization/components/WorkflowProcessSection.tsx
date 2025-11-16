import { useState, useEffect, useRef } from 'react';

const WorkflowProcessSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const workflowSteps = [
    {
      phase: "Initiation",
      title: "기획",
      description: "프로젝트 시작 및 전략 수립",
      department: "전략기획부문",
      color: "from-blue-500 to-blue-600",
      icon: "ri-lightbulb-line",
      activities: [
        "비즈니스 요구사항 분석",
        "프로젝트 범위 정의",
        "초기 아키텍처 설계",
        "리스크 평가"
      ]
    },
    {
      phase: "Analysis",
      title: "분석",
      description: "시장 및 기술 분석",
      department: "전략기획 + 마케팅",
      color: "from-indigo-500 to-purple-500",
      icon: "ri-search-line",
      activities: [
        "시장 경쟁사 분석",
        "고객 요구사항 연구",
        "기술 스택 검토",
        "BMC 작성"
      ]
    },
    {
      phase: "Design",
      title: "설계",
      description: "솔루션 아키텍처 설계",
      department: "개발부문 + 전략기획",
      color: "from-purple-500 to-pink-500",
      icon: "ri-draft-line",
      activities: [
        "시스템 아키텍처 설계",
        "UI/UX 디자인",
        "데이터 모델링",
        "API 설계"
      ]
    },
    {
      phase: "Implementation",
      title: "구현",
      description: "개발 및 구축",
      department: "AX/DX 개발부문",
      color: "from-pink-500 to-red-500",
      icon: "ri-code-s-slash-line",
      activities: [
        "풀스택 개발",
        "Power Platform 구축",
        "API 개발",
        "자동화 구현"
      ]
    },
    {
      phase: "Validation",
      title: "검증",
      description: "테스트 및 품질 보증",
      department: "개발부문 + 영업부문",
      color: "from-red-500 to-orange-500",
      icon: "ri-shield-check-line",
      activities: [
        "QA 테스트",
        "PoC 검증",
        "고객 피드백 수집",
        "성능 최적화"
      ]
    },
    {
      phase: "Operations",
      title: "운영",
      description: "배포 및 지속적 관리",
      department: "전 부문 협력",
      color: "from-orange-500 to-yellow-500",
      icon: "ri-settings-3-line",
      activities: [
        "프로덕션 배포",
        "모니터링 및 유지보수",
        "고객 지원",
        "지속적 개선"
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            협업 <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">워크플로우</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            6단계 프로세스를 통해 각 부문이 유기적으로 협력하여 최고의 결과를 만들어냅니다
          </p>
        </div>

        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 via-red-500 via-orange-500 to-yellow-500 rounded-full transform -translate-y-1/2"></div>
              
              {/* Timeline Steps */}
              <div className="grid grid-cols-6 gap-4">
                {workflowSteps.map((step, index) => (
                  <div key={index} className="relative">
                    {/* Step Circle */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10`}>
                      <i className={`${step.icon} text-2xl text-white`}></i>
                    </div>
                    
                    {/* Step Content */}
                    <div className="text-center">
                      <div className="text-sm font-medium text-gray-500 mb-1">{step.phase}</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                      <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                      <div className="text-xs font-medium text-blue-600 mb-4">{step.department}</div>
                      
                      {/* Activities */}
                      <div className="bg-gray-50 rounded-lg p-3">
                        <ul className="text-xs text-gray-700 space-y-1">
                          {step.activities.map((activity, actIndex) => (
                            <li key={actIndex}>• {activity}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {workflowSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <i className={`${step.icon} text-xl text-white`}></i>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-500 mb-1">{step.phase}</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                  <div className="text-xs font-medium text-blue-600 mb-3">{step.department}</div>
                  
                  <div className="bg-gray-50 rounded-lg p-3">
                    <ul className="text-sm text-gray-700 space-y-1">
                      {step.activities.map((activity, actIndex) => (
                        <li key={actIndex}>• {activity}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Collaboration Matrix */}
          <div className="mt-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">부문 간 협업 매트릭스</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 border border-blue-100">
                <h4 className="font-semibold text-gray-900 mb-3">전략기획 ↔ 개발</h4>
                <p className="text-sm text-gray-600">요구사항 분석, 아키텍처 설계, 프로젝트 관리</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-indigo-100">
                <h4 className="font-semibold text-gray-900 mb-3">영업 ↔ 마케팅</h4>
                <p className="text-sm text-gray-600">리드 생성, 고객 커뮤니케이션, 브랜드 구축</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-purple-100">
                <h4 className="font-semibold text-gray-900 mb-3">마케팅 ↔ 개발</h4>
                <p className="text-sm text-gray-600">기술 콘텐츠, 제품 스토리텔링, 데모 제작</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-cyan-100">
                <h4 className="font-semibold text-gray-900 mb-3">영업 ↔ 개발</h4>
                <p className="text-sm text-gray-600">PoC 구현, 기술 지원, 고객 맞춤화</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowProcessSection;