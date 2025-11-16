import { useState, useEffect, useRef } from 'react';

const FutureVisionSection = () => {
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

  const futureDivisions = [
    {
      title: "R&D / AI Lab",
      description: "차세대 AI 기술 연구 및 혁신적인 자동화 솔루션 개발",
      icon: "ri-flask-line",
      color: "from-emerald-500 to-teal-500",
      timeline: "2025 Q2",
      focus: ["AI 알고리즘 연구", "자동화 기술 혁신", "특허 출원", "기술 표준화"]
    },
    {
      title: "Customer Success Division",
      description: "고객 성공을 위한 전담 조직으로 지속적인 가치 창출 지원",
      icon: "ri-customer-service-2-line",
      color: "from-blue-500 to-cyan-500",
      timeline: "2025 Q3",
      focus: ["고객 온보딩", "성공 지표 관리", "확장 전략", "피드백 수집"]
    },
    {
      title: "Education & Enablement Division",
      description: "DX 역량 강화 교육 및 Microsoft 생태계 전문 교육 서비스",
      icon: "ri-graduation-cap-line",
      color: "from-purple-500 to-violet-500",
      timeline: "2025 Q4",
      focus: ["교육 프로그램 개발", "인증 과정 운영", "워크숍 진행", "역량 평가"]
    },
    {
      title: "SaaS Product Division",
      description: "Artiflow, SmartHub, ConnectStack 제품 전담 개발 및 운영",
      icon: "ri-cloud-line",
      color: "from-indigo-500 to-purple-500",
      timeline: "2026 Q1",
      focus: ["제품 로드맵", "기능 개발", "사용자 경험", "확장성 구현"]
    },
    {
      title: "Global Expansion Unit",
      description: "해외 시장 진출 및 글로벌 파트너십 구축을 위한 전담 조직",
      icon: "ri-global-line",
      color: "from-orange-500 to-red-500",
      timeline: "2026 Q3",
      focus: ["시장 진출 전략", "현지화", "파트너십", "글로벌 표준"]
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            3년 <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">비전</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            중견 DX 에이전시로 성장하기 위한 조직 확장 계획과 미래 구조를 제시합니다
          </p>
        </div>

        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {/* Current vs Future Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Current Structure */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">현재 구조 (2024)</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <i className="ri-user-star-line text-white text-sm"></i>
                  </div>
                  <span className="font-medium text-gray-900">CEO / Founder</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <i className="ri-strategic-line text-white text-sm"></i>
                  </div>
                  <span className="text-gray-700">전략기획부문</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                    <i className="ri-handshake-line text-white text-sm"></i>
                  </div>
                  <span className="text-gray-700">솔루션영업부문</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                    <i className="ri-megaphone-line text-white text-sm"></i>
                  </div>
                  <span className="text-gray-700">마케팅부문</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
                    <i className="ri-code-s-slash-line text-white text-sm"></i>
                  </div>
                  <span className="text-gray-700">AX/DX 개발부문</span>
                </div>
              </div>
              <div className="mt-6 text-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  4개 핵심 부문
                </span>
              </div>
            </div>

            {/* Future Structure */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center relative z-10">미래 구조 (2026)</h3>
              <div className="space-y-4 relative z-10">
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <i className="ri-user-star-line text-white text-sm"></i>
                  </div>
                  <span className="font-medium text-gray-900">CEO / Founder</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded text-xs">
                    <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                      <i className="ri-strategic-line text-white text-xs"></i>
                    </div>
                    <span className="text-gray-700">전략기획</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded text-xs">
                    <div className="w-6 h-6 bg-indigo-500 rounded flex items-center justify-center">
                      <i className="ri-handshake-line text-white text-xs"></i>
                    </div>
                    <span className="text-gray-700">솔루션영업</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded text-xs">
                    <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center">
                      <i className="ri-megaphone-line text-white text-xs"></i>
                    </div>
                    <span className="text-gray-700">마케팅</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded text-xs">
                    <div className="w-6 h-6 bg-cyan-500 rounded flex items-center justify-center">
                      <i className="ri-code-s-slash-line text-white text-xs"></i>
                    </div>
                    <span className="text-gray-700">AX/DX 개발</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-emerald-50 rounded text-xs border border-emerald-200">
                    <div className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center">
                      <i className="ri-flask-line text-white text-xs"></i>
                    </div>
                    <span className="text-emerald-700">R&D Lab</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-blue-50 rounded text-xs border border-blue-200">
                    <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                      <i className="ri-customer-service-2-line text-white text-xs"></i>
                    </div>
                    <span className="text-blue-700">고객성공</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-purple-50 rounded text-xs border border-purple-200">
                    <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center">
                      <i className="ri-graduation-cap-line text-white text-xs"></i>
                    </div>
                    <span className="text-purple-700">교육</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-indigo-50 rounded text-xs border border-indigo-200">
                    <div className="w-6 h-6 bg-indigo-500 rounded flex items-center justify-center">
                      <i className="ri-cloud-line text-white text-xs"></i>
                    </div>
                    <span className="text-indigo-700">SaaS 제품</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 bg-orange-50 rounded text-xs border border-orange-200">
                    <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                      <i className="ri-global-line text-white text-xs"></i>
                    </div>
                    <span className="text-orange-700">글로벌</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center relative z-10">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800">
                  9개 전문 부문
                </span>
              </div>
            </div>
          </div>

          {/* Future Divisions Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {futureDivisions.map((division, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 opacity-75 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${division.color} rounded-xl flex items-center justify-center`}>
                    <i className={`${division.icon} text-xl text-white`}></i>
                  </div>
                  <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {division.timeline}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">{division.title}</h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{division.description}</p>
                
                <div className="space-y-2">
                  <h5 className="text-sm font-semibold text-gray-900">핵심 영역</h5>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {division.focus.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Growth Timeline */}
          <div className="mt-16 bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">성장 로드맵</h3>
            
            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full transform -translate-y-1/2"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="text-white font-bold">2024</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">기반 구축</h4>
                  <p className="text-sm text-gray-600">4개 핵심 부문 운영</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="text-white font-bold">2025</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">전문화</h4>
                  <p className="text-sm text-gray-600">R&D, 고객성공, 교육 부문 신설</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="text-white font-bold">2026</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">확장</h4>
                  <p className="text-sm text-gray-600">SaaS 제품, 글로벌 진출</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="text-white font-bold">2027</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">글로벌</h4>
                  <p className="text-sm text-gray-600">중견 DX 에이전시 완성</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureVisionSection;