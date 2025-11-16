
import React from 'react';

const HeaderMegaMenuPrototype = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600" style={{ fontFamily: '"Pacifico", serif' }}>
                Artiordex
              </h1>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-5">
              <a href="/company" className="text-gray-700 hover:text-blue-600 font-medium text-sm px-3 py-2 transition-colors">
                회사소개
              </a>
              <a href="/services" className="text-blue-600 font-medium text-sm px-3 py-2 transition-colors">
                서비스
              </a>
              <a href="/solutions" className="text-gray-700 hover:text-blue-600 font-medium text-sm px-3 py-2 transition-colors">
                솔루션
              </a>
              <a href="/portfolio" className="text-gray-700 hover:text-blue-600 font-medium text-sm px-3 py-2 transition-colors">
                포트폴리오
              </a>
              <a href="/resources" className="text-gray-700 hover:text-blue-600 font-medium text-sm px-3 py-2 transition-colors">
                리소스
              </a>
              <a href="/education" className="text-gray-700 hover:text-blue-600 font-medium text-sm px-3 py-2 transition-colors">
                교육
              </a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium text-sm px-3 py-2 transition-colors">
                문의하기
              </a>
            </nav>

            {/* Right Menu */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                <i className="ri-search-line text-lg"></i>
              </button>
              <button className="px-3 py-1 text-sm font-medium text-gray-600 hover:text-blue-600 border border-gray-300 rounded transition-colors">
                KOR
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors whitespace-nowrap">
                실시간 상담
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mega Menu - Services (Expanded State) */}
      <div className="bg-white shadow-lg border-b border-gray-100 relative z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="grid grid-cols-4 gap-8">
            {/* Digital Transformation Consulting */}
            <div className="space-y-3">
              <div className="border-b border-gray-100 pb-2">
                <h3 className="text-sm font-semibold text-gray-900">
                  디지털 전환 컨설팅
                </h3>
              </div>
              <ul className="space-y-2">
                <li>
                  <a href="/services/dx-strategy" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                    DX 전략 수립
                  </a>
                </li>
                <li>
                  <a href="/services/process-diagnosis" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                    프로세스 진단
                  </a>
                </li>
                <li>
                  <a href="/services/roadmap-design" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                    로드맵 설계
                  </a>
                </li>
              </ul>
            </div>

            {/* Power Platform Development */}
            <div className="space-y-3">
              <div className="border-b border-gray-100 pb-2">
                <h3 className="text-sm font-semibold text-gray-900">
                  Power Platform 구축
                </h3>
              </div>
              <ul className="space-y-2">
                <li>
                  <a href="/services/power-apps" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                    Power Apps 개발
                  </a>
                </li>
                <li>
                  <a href="/services/power-automate" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                    Power Automate 자동화
                  </a>
                </li>
                <li>
                  <a href="/services/power-bi" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                    Power BI 대시보드
                  </a>
                </li>
                <li>
                  <a href="/services/dataverse" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                    Dataverse 통합
                  </a>
                </li>
              </ul>
            </div>

            {/* AI & Automation */}
            <div className="space-y-3">
              <div className="border-b border-gray-100 pb-2">
                <h3 className="text-sm font-semibold text-gray-900">
                  AI & 자동화
                </h3>
              </div>
              <ul className="space-y-2">
                <li>
                  <a href="/services/ai-chatbot" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                    AI 챗봇 구축
                  </a>
                </li>
                <li>
                  <a href="/services/rpa-automation" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                    RPA 자동화
                  </a>
                </li>
                <li>
                  <a href="/services/predictive-analytics" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                    예측 분석 모델
                  </a>
                </li>
                <li>
                  <a href="/services/copilot-integration" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                    Copilot 통합
                  </a>
                </li>
              </ul>
            </div>

            {/* Custom Development */}
            <div className="space-y-3">
              <div className="border-b border-gray-100 pb-2">
                <h3 className="text-sm font-semibold text-gray-900">
                  맞춤형 개발
                </h3>
              </div>
              <ul className="space-y-2">
                <li>
                  <a href="/services/web-app-development" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                    웹/앱 개발
                  </a>
                </li>
                <li>
                  <a href="/services/erp-crm-customization" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                    ERP/CRM 커스터마이징
                  </a>
                </li>
                <li>
                  <a href="/services/api-integration" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                    API 통합 개발
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="border-t border-gray-100 mt-4 pt-3">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                <span className="font-medium">contact@artiordex.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <a href="/contact/quote" className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors whitespace-nowrap">
                  견적 요청
                </a>
                <a href="/contact/consultation" className="px-4 py-2 border border-blue-600 text-blue-600 text-sm font-medium rounded hover:bg-blue-50 transition-colors whitespace-nowrap">
                  상담 예약
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Artiordex 헤더 + 메가메뉴 프로토타입
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            위 헤더는 "서비스" 메뉴가 활성화된 상태의 메가메뉴를 보여줍니다. 
            실제 구현 시에는 각 메뉴별로 해당하는 메가메뉴 콘텐츠가 표시됩니다.
          </p>
        </div>

        {/* Additional Mega Menu Examples */}
        <div className="mt-16 space-y-12">
          {/* Company Mega Menu Example */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">회사소개 메가메뉴 구조</h3>
            <div className="grid grid-cols-4 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2 border-b border-gray-100 pb-1">아티올덱스 소개</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li><a href="/company/vision-mission" className="hover:text-blue-600">비전 & 미션</a></li>
                  <li><a href="/company/ceo-message" className="hover:text-blue-600">CEO 인사말</a></li>
                  <li><a href="/company/history" className="hover:text-blue-600">회사 연혁</a></li>
                  <li><a href="/company/core-values" className="hover:text-blue-600">핵심 가치</a></li>
                  <li><a href="/company/brand-identity" className="hover:text-blue-600">브랜드 아이덴티티</a></li>
                  <li><a href="/company/certifications" className="hover:text-blue-600">인증 & 브로슈어</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2 border-b border-gray-100 pb-1">팀 소개</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li><a href="/company/organization" className="hover:text-blue-600">조직도</a></li>
                  <li><a href="/company/team-profiles" className="hover:text-blue-600">핵심 멤버 프로필</a></li>
                  <li><a href="/company/careers" className="hover:text-blue-600">채용 정보</a></li>
                  <li><a href="/company/culture" className="hover:text-blue-600">기업문화 & 일하는 방식</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2 border-b border-gray-100 pb-1">파트너십</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li><a href="/company/microsoft-partner" className="hover:text-blue-600">Microsoft Partner 인증</a></li>
                  <li><a href="/company/tech-partners" className="hover:text-blue-600">기술 파트너</a></li>
                  <li><a href="/company/clients-references" className="hover:text-blue-600">고객사 & 레퍼런스</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2 border-b border-gray-100 pb-1">오시는 길</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li><a href="/company/location" className="hover:text-blue-600">오시는 길</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Solutions Mega Menu Example */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">솔루션 메가메뉴 구조</h3>
            <div className="grid grid-cols-4 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2 border-b border-gray-100 pb-1">산업별 솔루션</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li><a href="/solutions/manufacturing" className="hover:text-blue-600">제조업</a></li>
                  <li><a href="/solutions/retail" className="hover:text-blue-600">유통/리테일</a></li>
                  <li><a href="/solutions/finance" className="hover:text-blue-600">금융</a></li>
                  <li><a href="/solutions/education" className="hover:text-blue-600">교육</a></li>
                  <li><a href="/solutions/public-sector" className="hover:text-blue-600">공공기관</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2 border-b border-gray-100 pb-1">기능별 솔루션</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li><a href="/solutions/sales-automation" className="hover:text-blue-600">영업 자동화</a></li>
                  <li><a href="/solutions/marketing-automation" className="hover:text-blue-600">마케팅 자동화</a></li>
                  <li><a href="/solutions/hr-digitalization" className="hover:text-blue-600">HR 디지털화</a></li>
                  <li><a href="/solutions/financial-management" className="hover:text-blue-600">재무 관리</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2 border-b border-gray-100 pb-1">제품 소개</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li><a href="/solutions/artiflow" className="hover:text-blue-600">Artiflow</a></li>
                  <li><a href="/solutions/connectwon" className="hover:text-blue-600">ConnectWon</a></li>
                  <li><a href="/solutions/packages" className="hover:text-blue-600">패키지 상품</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2 border-b border-gray-100 pb-1"></h4>
                <ul className="space-y-1 text-sm text-gray-700">
                </ul>
              </div>
            </div>
          </div>

          {/* Portfolio Mega Menu Example */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">포트폴리오 메가메뉴 구조</h3>
            <div className="grid grid-cols-4 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2 border-b border-gray-100 pb-1">전체 프로젝트</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li><a href="/portfolio" className="hover:text-blue-600">전체 프로젝트</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2 border-b border-gray-100 pb-1">산업별 사례</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li><a href="/portfolio/b2b" className="hover:text-blue-600">B2B</a></li>
                  <li><a href="/portfolio/b2c" className="hover:text-blue-600">B2C</a></li>
                  <li><a href="/portfolio/b2g" className="hover:text-blue-600">B2G</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2 border-b border-gray-100 pb-1">기술별 사례</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li><a href="/portfolio/power-platform" className="hover:text-blue-600">Power Platform</a></li>
                  <li><a href="/portfolio/ai-ml" className="hover:text-blue-600">AI/ML</a></li>
                  <li><a href="/portfolio/web-app" className="hover:text-blue-600">웹/앱 개발</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2 border-b border-gray-100 pb-1">고객 후기</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li><a href="/portfolio/testimonials" className="hover:text-blue-600">고객 후기</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Resources Mega Menu Example */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">리소스 메가메뉴 구조</h3>
            <div className="grid grid-cols-4 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2 border-b border-gray-100 pb-1">기술 블로그</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li><a href="/resources/power-platform-guide" className="hover:text-blue-600">Power Platform 가이드</a></li>
                  <li><a href="/resources/ai-automation-trends" className="hover:text-blue-600">AI/자동화 트렌드</a></li>
                  <li><a href="/resources/development-tutorials" className="hover:text-blue-600">개발 튜토리얼</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2 border-b border-gray-100 pb-1">다운로드 센터</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li><a href="/resources/whitepapers" className="hover:text-blue-600">백서 & 가이드북</a></li>
                  <li><a href="/resources/case-studies" className="hover:text-blue-600">사례 연구</a></li>
                  <li><a href="/resources/templates-toolkits" className="hover:text-blue-600">템플릿 & 툴킷</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2 border-b border-gray-100 pb-1">웨비나 & 이벤트</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li><a href="/resources/upcoming-webinars" className="hover:text-blue-600">예정된 웨비나</a></li>
                  <li><a href="/resources/past-webinars" className="hover:text-blue-600">지난 웨비나 다시보기</a></li>
                  <li><a href="/resources/offline-seminars" className="hover:text-blue-600">오프라인 세미나</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2 border-b border-gray-100 pb-1">FAQ & 도움말</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li><a href="/resources/faq" className="hover:text-blue-600">자주 묻는 질문</a></li>
                  <li><a href="/resources/glossary" className="hover:text-blue-600">용어 사전</a></li>
                  <li><a href="/resources/technical-docs" className="hover:text-blue-600">기술 문서</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education Mega Menu Example */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">교육 메가메뉴 구조</h3>
            <div className="grid grid-cols-4 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2 border-b border-gray-100 pb-1">교육 프로그램</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li><a href="/education/power-platform-basics" className="hover:text-blue-600">Power Platform 기초</a></li>
                  <li><a href="/education/low-code-development" className="hover:text-blue-600">로우코드 개발 과정</a></li>
                  <li><a href="/education/dx-strategy-course" className="hover:text-blue-600">DX 전략 과정</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2 border-b border-gray-100 pb-1">인증 과정</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li><a href="/education/microsoft-certification" className="hover:text-blue-600">Microsoft 인증 준비</a></li>
                  <li><a href="/education/certification-support" className="hover:text-blue-600">자격증 취득 지원</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2 border-b border-gray-100 pb-1">온라인 강의</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li><a href="/education/free-courses" className="hover:text-blue-600">무료 강의</a></li>
                  <li><a href="/education/premium-subscription" className="hover:text-blue-600">유료 구독</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2 border-b border-gray-100 pb-1"></h4>
                <ul className="space-y-1 text-sm text-gray-700">
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Mega Menu Example */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">문의하기 메가메뉴 구조</h3>
            <div className="grid grid-cols-4 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2 border-b border-gray-100 pb-1">프로젝트 문의</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li><a href="/contact/quote-request" className="hover:text-blue-600">견적 요청</a></li>
                  <li><a href="/contact/consultation" className="hover:text-blue-600">상담 예약</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2 border-b border-gray-100 pb-1">기술 지원</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li><a href="/contact/maintenance" className="hover:text-blue-600">유지보수 문의</a></li>
                  <li><a href="/contact/emergency-support" className="hover:text-blue-600">긴급 지원</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2 border-b border-gray-100 pb-1">제휴 제안</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li><a href="/contact/partnership" className="hover:text-blue-600">제휴 제안</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2 border-b border-gray-100 pb-1"></h4>
                <ul className="space-y-1 text-sm text-gray-700">
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMegaMenuPrototype;
