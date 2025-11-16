import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../../components/feature/Breadcrumb';

const AIAutomationPage = () => {
  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '솔루션', href: '/solutions' },
    { label: 'AI & 자동화', href: '/solutions/ai-automation' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">AI & 자동화 솔루션</h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Microsoft 생태계 기반 AI와 자동화 기술로 비즈니스 프로세스를 혁신하고, 
              지능형 워크플로우를 통해 운영 효율성을 극대화합니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                프로젝트 문의
              </Link>
              <a 
                href="tel:02-1234-5678" 
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                전화 상담
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 고객이 겪는 문제 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">이런 문제로 고민하고 계신가요?</h2>
            <p className="text-lg text-gray-600">많은 기업들이 겪고 있는 공통적인 운영 과제들입니다</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "ri-file-text-line",
                title: "반복적인 수작업",
                description: "매일 반복되는 문서 처리, 데이터 입력 작업으로 인한 시간 낭비"
              },
              {
                icon: "ri-error-warning-line",
                title: "휴먼 에러 발생",
                description: "수동 프로세스로 인한 실수와 품질 관리의 어려움"
              },
              {
                icon: "ri-time-line",
                title: "느린 의사결정",
                description: "분산된 정보와 복잡한 승인 프로세스로 인한 지연"
              },
              {
                icon: "ri-money-dollar-circle-line",
                title: "높은 운영 비용",
                description: "비효율적인 프로세스로 인한 인력 및 시간 비용 증가"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <i className={`${item.icon} text-xl text-red-600`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 솔루션 개요 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">AI 기반 지능형 자동화로 해결합니다</h2>
              <p className="text-lg text-gray-600 mb-6">
                Artiordex의 AI & 자동화 솔루션은 Microsoft Power Platform, Azure OpenAI, 
                그리고 RPA 기술을 통합하여 비즈니스 프로세스를 완전히 자동화합니다.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-blue-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">지능형 문서 처리</h4>
                    <p className="text-gray-600 text-sm">AI OCR과 자연어 처리로 문서를 자동 분석하고 처리</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-blue-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">워크플로우 자동화</h4>
                    <p className="text-gray-600 text-sm">복잡한 비즈니스 프로세스를 AI가 자동으로 실행</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-blue-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">예측 분석</h4>
                    <p className="text-gray-600 text-sm">데이터 기반 예측으로 선제적 의사결정 지원</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20AI%20automation%20dashboard%20with%20robotic%20process%20automation%2C%20intelligent%20workflows%2C%20data%20analytics%20charts%2C%20Microsoft%20Azure%20interface%2C%20clean%20blue%20and%20white%20design%2C%20professional%20business%20technology&width=600&height=400&seq=ai-automation-overview&orientation=landscape"
                alt="AI 자동화 솔루션 개요"
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
            <p className="text-lg text-gray-600">AI와 자동화 기술의 완벽한 조합</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "ri-robot-line",
                title: "RPA + AI 통합",
                description: "로봇 프로세스 자동화와 AI 기술의 완벽한 결합으로 지능형 자동화 구현"
              },
              {
                icon: "ri-file-text-line",
                title: "문서 자동화",
                description: "AI OCR과 자연어 처리를 통한 문서 인식, 분류, 처리 자동화"
              },
              {
                icon: "ri-brain-line",
                title: "AI Agent 운영",
                description: "Azure OpenAI 기반 지능형 에이전트로 복잡한 업무 자동 처리"
              },
              {
                icon: "ri-flow-chart",
                title: "워크플로우 엔진",
                description: "Power Automate 기반 비즈니스 프로세스 자동화 및 최적화"
              },
              {
                icon: "ri-dashboard-line",
                title: "실시간 모니터링",
                description: "자동화 프로세스의 실시간 상태 모니터링 및 성과 분석"
              },
              {
                icon: "ri-shield-check-line",
                title: "엔터프라이즈 보안",
                description: "Microsoft 보안 표준 준수 및 데이터 보호 체계"
              },
              {
                icon: "ri-notification-line",
                title: "지능형 알림",
                description: "AI 기반 예외 상황 감지 및 자동 알림 시스템"
              },
              {
                icon: "ri-line-chart-line",
                title: "예측 분석",
                description: "머신러닝 기반 트렌드 분석 및 비즈니스 예측"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <i className={`${feature.icon} text-xl text-blue-600`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 대상 고객 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">이런 기업에 최적화되어 있습니다</h2>
            <p className="text-lg text-gray-600">다양한 규모와 산업의 디지털 전환을 지원합니다</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "중소기업 & 스타트업",
                description: "제한된 인력으로 효율성을 극대화하고 싶은 기업",
                features: ["반복 업무 자동화", "비용 효율적 솔루션", "빠른 도입 및 적용"]
              },
              {
                title: "대기업 & 공공기관",
                description: "복잡한 프로세스를 표준화하고 최적화하려는 조직",
                features: ["엔터프라이즈급 보안", "대용량 데이터 처리", "규정 준수 지원"]
              },
              {
                title: "제조업 & 서비스업",
                description: "현장 운영과 고객 서비스를 디지털화하려는 기업",
                features: ["현장 업무 자동화", "품질 관리 시스템", "고객 응대 자동화"]
              }
            ].map((target, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{target.title}</h3>
                <p className="text-gray-600 mb-6">{target.description}</p>
                <ul className="space-y-2">
                  {target.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <i className="ri-check-line text-blue-600"></i>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 활용 사례 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">실제 활용 사례</h2>
            <p className="text-lg text-gray-600">다양한 산업에서 검증된 성과</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "제조업 품질 관리 자동화",
                industry: "제조업",
                challenge: "수작업 품질 검사로 인한 시간 지연과 휴먼 에러",
                solution: "AI 비전 검사 + 자동 불량품 분류 시스템",
                results: ["검사 시간 70% 단축", "불량률 85% 감소", "인력 비용 40% 절감"]
              },
              {
                title: "금융업 서류 심사 자동화",
                industry: "금융업",
                challenge: "대출 서류 검토에 소요되는 시간과 인력 부족",
                solution: "AI 문서 분석 + 자동 심사 워크플로우",
                results: ["심사 시간 60% 단축", "정확도 95% 향상", "처리량 3배 증가"]
              },
              {
                title: "유통업 재고 관리 최적화",
                industry: "유통업",
                challenge: "복잡한 재고 관리와 수요 예측의 어려움",
                solution: "AI 수요 예측 + 자동 발주 시스템",
                results: ["재고 비용 30% 절감", "품절률 50% 감소", "매출 15% 증가"]
              },
              {
                title: "공공기관 민원 처리 자동화",
                industry: "공공기관",
                challenge: "반복적인 민원 처리로 인한 업무 부담 증가",
                solution: "AI 챗봇 + 자동 민원 분류 및 처리",
                results: ["처리 시간 80% 단축", "민원인 만족도 90% 향상", "직원 업무 효율 50% 증가"]
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{useCase.title}</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                    {useCase.industry}
                  </span>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">문제</h4>
                    <p className="text-gray-600 text-sm">{useCase.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">솔루션</h4>
                    <p className="text-gray-600 text-sm">{useCase.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">성과</h4>
                    <ul className="space-y-1">
                      {useCase.results.map((result, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <i className="ri-arrow-right-line text-blue-600 text-sm"></i>
                          <span className="text-sm text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 기대 효과 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">기대할 수 있는 효과</h2>
            <p className="text-lg text-gray-600">AI 자동화 도입으로 얻을 수 있는 구체적인 성과</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "ri-time-line",
                title: "업무 효율성 향상",
                description: "반복 업무 자동화로 평균 60-80% 시간 절약",
                metric: "60-80%"
              },
              {
                icon: "ri-money-dollar-circle-line",
                title: "운영 비용 절감",
                description: "인력 및 프로세스 최적화로 운영비 30-50% 절감",
                metric: "30-50%"
              },
              {
                icon: "ri-error-warning-line",
                title: "오류율 감소",
                description: "AI 기반 자동화로 휴먼 에러 90% 이상 감소",
                metric: "90%+"
              },
              {
                icon: "ri-customer-service-line",
                title: "고객 만족도 향상",
                description: "빠르고 정확한 서비스로 고객 만족도 대폭 개선",
                metric: "95%+"
              },
              {
                icon: "ri-line-chart-line",
                title: "데이터 기반 의사결정",
                description: "실시간 분석과 예측으로 전략적 의사결정 지원",
                metric: "실시간"
              },
              {
                icon: "ri-shield-check-line",
                title: "규정 준수 강화",
                description: "자동화된 프로세스로 컴플라이언스 리스크 최소화",
                metric: "100%"
              }
            ].map((effect, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${effect.icon} text-2xl text-blue-600`}></i>
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{effect.metric}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{effect.title}</h3>
                <p className="text-gray-600 text-sm">{effect.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 아키텍처 구성 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">솔루션 아키텍처</h2>
            <p className="text-lg text-gray-600">Microsoft 생태계 기반의 통합 아키텍처</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                layer: "AI Layer",
                title: "AI 엔진",
                components: ["Azure OpenAI", "Cognitive Services", "Machine Learning", "Computer Vision"],
                color: "bg-purple-100 text-purple-600"
              },
              {
                layer: "Automation Layer",
                title: "자동화 엔진",
                components: ["Power Automate", "Logic Apps", "RPA Bots", "Workflow Engine"],
                color: "bg-blue-100 text-blue-600"
              },
              {
                layer: "Integration Layer",
                title: "통합 레이어",
                components: ["API Gateway", "Service Bus", "Event Grid", "Data Factory"],
                color: "bg-green-100 text-green-600"
              },
              {
                layer: "Operation Layer",
                title: "운영 대시보드",
                components: ["Power BI", "Monitoring", "Analytics", "Reporting"],
                color: "bg-orange-100 text-orange-600"
              }
            ].map((layer, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${layer.color}`}>
                  {layer.layer}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{layer.title}</h3>
                <ul className="space-y-2">
                  {layer.components.map((component, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center space-x-2">
                      <i className="ri-check-line text-blue-600"></i>
                      <span>{component}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-4 text-sm text-gray-600">
              <span>AI Layer</span>
              <i className="ri-arrow-right-line"></i>
              <span>Automation Layer</span>
              <i className="ri-arrow-right-line"></i>
              <span>Integration Layer</span>
              <i className="ri-arrow-right-line"></i>
              <span>Operation Layer</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">AI 자동화로 비즈니스를 혁신하세요</h2>
          <p className="text-xl text-blue-100 mb-8">
            전문가와 상담하고 맞춤형 솔루션을 확인해보세요
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              프로젝트 문의하기
            </Link>
            <a 
              href="tel:02-1234-5678" 
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              전화 상담 받기
            </a>
            <Link 
              to="/solutions" 
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              다른 솔루션 보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutomationPage;