import { useState, useEffect, useRef } from 'react';

const OrganizationChartSection = () => {
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

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            조직 <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">체계</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            CEO 중심의 4개 핵심 부문이 유기적으로 협력하여 고객 가치를 창출합니다
          </p>
        </div>

        {/* Organization Chart */}
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {/* CEO Level */}
          <div className="flex justify-center mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl shadow-lg max-w-md text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-user-star-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold mb-2">CEO / Founder</h3>
              <p className="text-lg font-medium mb-1">민시우 (Shiwoo Min)</p>
              <p className="text-sm text-blue-100">
                Strategic Leadership & Vision
              </p>
              <div className="mt-4 text-xs text-blue-100">
                "Technology Connects, Innovation Empowers"
              </div>
            </div>
          </div>

          {/* Connection Lines */}
          <div className="flex justify-center mb-8">
            <div className="w-px h-12 bg-gradient-to-b from-blue-400 to-transparent"></div>
          </div>

          {/* Divisions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Strategy & Planning Division */}
            <div className={`bg-white border-2 border-blue-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-strategic-line text-white text-xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">전략기획부문</h4>
              <p className="text-sm text-gray-600 mb-4">Strategy & Planning Division</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• 사업 전략 수립</li>
                <li>• 서비스 기획</li>
                <li>• 시장 분석</li>
                <li>• 아키텍처 설계</li>
                <li>• 프로젝트 기획</li>
              </ul>
            </div>

            {/* Solution Business Division */}
            <div className={`bg-white border-2 border-indigo-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-handshake-line text-white text-xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">솔루션영업부문</h4>
              <p className="text-sm text-gray-600 mb-4">Solution Business Division</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• B2B 영업</li>
                <li>• 공공부문 협력</li>
                <li>• 고객 온보딩</li>
                <li>• 파트너십 네트워킹</li>
                <li>• 고객 성공 관리</li>
              </ul>
            </div>

            {/* Marketing Division */}
            <div className={`bg-white border-2 border-purple-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-megaphone-line text-white text-xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">마케팅부문</h4>
              <p className="text-sm text-gray-600 mb-4">Marketing Division</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• 브랜딩 & 콘텐츠</li>
                <li>• DX 스토리텔링</li>
                <li>• 기술 문서 작성</li>
                <li>• 디지털 마케팅</li>
                <li>• 커뮤니케이션</li>
              </ul>
            </div>

            {/* AX/DX Development Division */}
            <div className={`bg-white border-2 border-cyan-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <i className="ri-code-s-slash-line text-white text-xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">AX/DX 개발부문</h4>
              <p className="text-sm text-gray-600 mb-4">AX/DX Development Division</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• 풀스택 개발</li>
                <li>• Power Platform 엔지니어링</li>
                <li>• API 개발</li>
                <li>• Azure 아키텍처</li>
                <li>• 자동화 구현</li>
              </ul>
            </div>
          </div>

          {/* Collaboration Lines */}
          <div className="mt-12 flex justify-center">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                <span>기획</span>
                <i className="ri-arrow-right-line text-blue-500"></i>
                <span>분석</span>
                <i className="ri-arrow-right-line text-blue-500"></i>
                <span>설계</span>
                <i className="ri-arrow-right-line text-blue-500"></i>
                <span>구현</span>
                <i className="ri-arrow-right-line text-blue-500"></i>
                <span>검증</span>
                <i className="ri-arrow-right-line text-blue-500"></i>
                <span>운영</span>
              </div>
              <p className="text-center text-xs text-gray-500 mt-2">Cross-functional Collaboration Workflow</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationChartSection;