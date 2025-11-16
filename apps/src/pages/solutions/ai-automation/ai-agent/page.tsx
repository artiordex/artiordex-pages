import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../../../components/feature/Breadcrumb';

const AIAgentPage = () => {
  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '솔루션', href: '/solutions' },
    { label: 'AI & 자동화', href: '/solutions/ai-automation' },
    { label: 'AI Agent 운영', href: '/solutions/ai-automation/ai-agent' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-600 via-cyan-700 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">AI Agent 운영 솔루션</h1>
            <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
              Azure OpenAI 기반 지능형 AI 에이전트로 고객 응대, 업무 처리, 
              의사결정 지원까지 24시간 자동화된 비즈니스 운영을 실현합니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                프로젝트 문의
              </Link>
              <a 
                href="tel:02-1234-5678" 
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-600 transition-colors"
              >
                전화 상담
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 솔루션 개요 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">지능형 AI 에이전트 시스템</h2>
              <p className="text-lg text-gray-600 mb-6">
                GPT-4 기반의 고도화된 AI 에이전트가 복잡한 업무를 이해하고 
                자율적으로 처리하여 인간 수준의 업무 품질을 제공합니다.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-cyan-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">자연어 대화</h4>
                    <p className="text-gray-600 text-sm">인간과 자연스러운 대화로 복잡한 요청 이해 및 처리</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-cyan-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">업무 자동 실행</h4>
                    <p className="text-gray-600 text-sm">시스템 연동을 통한 실제 업무 처리 및 결과 보고</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-cyan-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">학습 및 개선</h4>
                    <p className="text-gray-600 text-sm">사용할수록 더 정확해지는 지속적 학습 시스템</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-blue-100 p-8 rounded-2xl">
              <img 
                src="https://readdy.ai/api/search-image?query=AI%20agent%20assistant%20with%20holographic%20interface%2C%20intelligent%20conversation%20system%2C%20automated%20task%20execution%2C%20cyan%20and%20blue%20color%20scheme%2C%20futuristic%20business%20technology%2C%20clean%20professional%20design&width=600&height=400&seq=ai-agent-system&orientation=landscape"
                alt="AI Agent 운영 솔루션"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 핵심 기능 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">핵심 기능</h2>
            <p className="text-lg text-gray-600">차세대 AI 에이전트의 강력한 기능들</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "ri-chat-3-line",
                title: "대화형 인터페이스",
                description: "자연어로 복잡한 업무 요청을 이해하고 적절한 응답 제공"
              },
              {
                icon: "ri-brain-line",
                title: "컨텍스트 이해",
                description: "대화 맥락과 업무 상황을 파악하여 정확한 판단 수행"
              },
              {
                icon: "ri-tools-line",
                title: "시스템 연동",
                description: "ERP, CRM 등 기업 시스템과 직접 연동하여 실제 업무 처리"
              },
              {
                icon: "ri-file-text-line",
                title: "문서 생성",
                description: "보고서, 이메일, 제안서 등 다양한 문서 자동 작성"
              },
              {
                icon: "ri-calendar-line",
                title: "일정 관리",
                description: "회의 예약, 일정 조율, 리마인더 등 스케줄 관리"
              },
              {
                icon: "ri-bar-chart-line",
                title: "데이터 분석",
                description: "비즈니스 데이터 분석 및 인사이트 도출"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <i className={`${feature.icon} text-xl text-cyan-600`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 활용 사례 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">활용 사례</h2>
            <p className="text-lg text-gray-600">다양한 업무 영역에서의 AI Agent 활용</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "고객 서비스 AI 어시스턴트",
                description: "24시간 고객 문의 응답 및 문제 해결",
                benefits: ["응답 시간 95% 단축", "고객 만족도 90% 향상", "상담원 업무 부담 70% 감소"]
              },
              {
                title: "영업 지원 AI 에이전트",
                description: "리드 관리, 제안서 작성, 고객 분석 자동화",
                benefits: ["영업 효율 60% 향상", "제안서 작성 시간 80% 단축", "성약률 25% 증가"]
              },
              {
                title: "HR 업무 자동화 에이전트",
                description: "채용, 온보딩, 직원 문의 처리 자동화",
                benefits: ["채용 프로세스 50% 단축", "HR 업무 효율 3배 향상", "직원 만족도 향상"]
              },
              {
                title: "재무 분석 AI 어시스턴트",
                description: "재무 데이터 분석 및 보고서 자동 생성",
                benefits: ["분석 시간 90% 단축", "보고서 정확도 98% 달성", "의사결정 속도 5배 향상"]
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">주요 효과</h4>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <i className="ri-check-line text-cyan-600"></i>
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">AI Agent로 비즈니스를 자동화하세요</h2>
          <p className="text-xl text-cyan-100 mb-8">
            전문가와 상담하고 맞춤형 AI Agent 솔루션을 확인해보세요
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              프로젝트 문의하기
            </Link>
            <a 
              href="tel:02-1234-5678" 
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-600 transition-colors"
            >
              전화 상담 받기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAgentPage;